/*! * Object.observe polyfill - v0.2.4 * by Massimo Artizzu (MaxArt2501) * * https://github.com/MaxArt2501/object-observe * * Licensed under the MIT License * See LICENSE for details */
Object.observe || (function(O, A, root, _undefined) { "use strict"; var observed, handlers, defaultAcceptList = ["add", "update", "delete", "reconfigure", "setPrototype", "preventExtensions"]; var isArray = A.isArray || (function(toString) { return function(object) { return toString.call(object) === "[object Array]"; }; })(O.prototype.toString),
        inArray = A.prototype.indexOf ? A.indexOf || function(array, pivot, start) { return A.prototype.indexOf.call(array, pivot, start); } : function(array, pivot, start) { for (var i = start || 0; i < array.length; i++)
                if (array[i] === pivot) return i;
            return -1; },
        createMap = root.Map === _undefined || !Map.prototype.forEach ? function() { var keys = [],
                values = []; return { size: 0, has: function(key) { return inArray(keys, key) > -1; }, get: function(key) { return values[inArray(keys, key)]; }, set: function(key, value) { var i = inArray(keys, key); if (i === -1) { keys.push(key);
                        values.push(value);
                        this.size++; } else values[i] = value; }, "delete": function(key) { var i = inArray(keys, key); if (i > -1) { keys.splice(i, 1);
                        values.splice(i, 1);
                        this.size--; } }, forEach: function(callback) { for (var i = 0; i < keys.length; i++) callback.call(arguments[1], values[i], keys[i], this); } }; } : function() { return new Map(); },
        getProps = O.getOwnPropertyNames ? (function() { var func = O.getOwnPropertyNames; try { arguments.callee; } catch (e) { var avoid = (func(inArray).join(" ") + " ").replace(/prototype |length |name /g, "").slice(0, -1).split(" "); if (avoid.length) func = function(object) { var props = O.getOwnPropertyNames(object); if (typeof object === "function")
                        for (var i = 0, j; i < avoid.length;)
                            if ((j = inArray(props, avoid[i++])) > -1) props.splice(j, 1);
                    return props; }; } return func; })() : function(object) { var props = [],
                prop, hop; if ("hasOwnProperty" in object) { for (prop in object)
                    if (object.hasOwnProperty(prop)) props.push(prop); } else { hop = O.hasOwnProperty; for (prop in object)
                    if (hop.call(object, prop)) props.push(prop); } if (isArray(object)) props.push("length"); return props; },
        getPrototype = O.getPrototypeOf,
        getDescriptor = O.defineProperties && O.getOwnPropertyDescriptor,
        nextFrame = root.requestAnimationFrame || root.webkitRequestAnimationFrame || (function() { var initial = +new Date,
                last = initial; return function(func) { return setTimeout(function() { func((last = +new Date) - initial); }, 17); }; })(),
        doObserve = function(object, handler, acceptList) { var data = observed.get(object); if (data) { performPropertyChecks(data, object);
                setHandler(object, data, handler, acceptList); } else { data = createObjectData(object);
                setHandler(object, data, handler, acceptList); if (observed.size === 1) nextFrame(runGlobalLoop); } },
        createObjectData = function(object, data) { var props = getProps(object),
                values = [],
                descs, i = 0,
                data = { handlers: createMap(), frozen: O.isFrozen ? O.isFrozen(object) : false, extensible: O.isExtensible ? O.isExtensible(object) : true, proto: getPrototype && getPrototype(object), properties: props, values: values, notifier: retrieveNotifier(object, data) }; if (getDescriptor) { descs = data.descriptors = []; while (i < props.length) { descs[i] = getDescriptor(object, props[i]);
                    values[i] = object[props[i++]]; } } else
                while (i < props.length) values[i] = object[props[i++]];
            observed.set(object, data); return data; },
        performPropertyChecks = (function() { var updateCheck = getDescriptor ? function(object, data, idx, except, descr) { var key = data.properties[idx],
                    value = object[key],
                    ovalue = data.values[idx],
                    odesc = data.descriptors[idx]; if ("value" in descr && (ovalue === value ? ovalue === 0 && 1 / ovalue !== 1 / value : ovalue === ovalue || value === value)) { addChangeRecord(object, data, { name: key, type: "update", object: object, oldValue: ovalue }, except);
                    data.values[idx] = value; } if (odesc.configurable && (!descr.configurable || descr.writable !== odesc.writable || descr.enumerable !== odesc.enumerable || descr.get !== odesc.get || descr.set !== odesc.set)) { addChangeRecord(object, data, { name: key, type: "reconfigure", object: object, oldValue: ovalue }, except);
                    data.descriptors[idx] = descr; } } : function(object, data, idx, except) { var key = data.properties[idx],
                    value = object[key],
                    ovalue = data.values[idx]; if (ovalue === value ? ovalue === 0 && 1 / ovalue !== 1 / value : ovalue === ovalue || value === value) { addChangeRecord(object, data, { name: key, type: "update", object: object, oldValue: ovalue }, except);
                    data.values[idx] = value; } }; var deletionCheck = getDescriptor ? function(object, props, proplen, data, except) { var i = props.length,
                    descr; while (proplen && i--) { if (props[i] !== null) { descr = getDescriptor(object, props[i]);
                        proplen--; if (descr) updateCheck(object, data, i, except, descr);
                        else { addChangeRecord(object, data, { name: props[i], type: "delete", object: object, oldValue: data.values[i] }, except);
                            data.properties.splice(i, 1);
                            data.values.splice(i, 1);
                            data.descriptors.splice(i, 1); } } } } : function(object, props, proplen, data, except) { var i = props.length; while (proplen && i--)
                    if (props[i] !== null) { addChangeRecord(object, data, { name: props[i], type: "delete", object: object, oldValue: data.values[i] }, except);
                        data.properties.splice(i, 1);
                        data.values.splice(i, 1);
                        proplen--; } }; return function(data, object, except) { if (!data.handlers.size || data.frozen) return; var props, proplen, keys, values = data.values,
                    descs = data.descriptors,
                    i = 0,
                    idx, key, value, proto, descr; if (data.extensible) { props = data.properties.slice();
                    proplen = props.length;
                    keys = getProps(object); if (descs) { while (i < keys.length) { key = keys[i++];
                            idx = inArray(props, key);
                            descr = getDescriptor(object, key); if (idx === -1) { addChangeRecord(object, data, { name: key, type: "add", object: object }, except);
                                data.properties.push(key);
                                values.push(object[key]);
                                descs.push(descr); } else { props[idx] = null;
                                proplen--;
                                updateCheck(object, data, idx, except, descr); } }
                        deletionCheck(object, props, proplen, data, except); if (!O.isExtensible(object)) { data.extensible = false;
                            addChangeRecord(object, data, { type: "preventExtensions", object: object }, except);
                            data.frozen = O.isFrozen(object); } } else { while (i < keys.length) { key = keys[i++];
                            idx = inArray(props, key);
                            value = object[key]; if (idx === -1) { addChangeRecord(object, data, { name: key, type: "add", object: object }, except);
                                data.properties.push(key);
                                values.push(value); } else { props[idx] = null;
                                proplen--;
                                updateCheck(object, data, idx, except); } }
                        deletionCheck(object, props, proplen, data, except); } } else if (!data.frozen) { for (; i < props.length; i++) { key = props[i];
                        updateCheck(object, data, i, except, getDescriptor(object, key)); } if (O.isFrozen(object)) data.frozen = true; } if (getPrototype) { proto = getPrototype(object); if (proto !== data.proto) { addChangeRecord(object, data, { type: "setPrototype", name: "__proto__", object: object, oldValue: data.proto });
                        data.proto = proto; } } }; })(),
        runGlobalLoop = function() { if (observed.size) { observed.forEach(performPropertyChecks);
                handlers.forEach(deliverHandlerRecords);
                nextFrame(runGlobalLoop); } },
        deliverHandlerRecords = function(hdata, handler) { var records = hdata.changeRecords; if (records.length) { hdata.changeRecords = [];
                handler(records); } },
        retrieveNotifier = function(object, data) { if (arguments.length < 2) data = observed.get(object); return data && data.notifier || { notify: function(changeRecord) { changeRecord.type; var data = observed.get(object); if (data) { var recordCopy = { object: object },
                            prop; for (prop in changeRecord)
                            if (prop !== "object") recordCopy[prop] = changeRecord[prop];
                        addChangeRecord(object, data, recordCopy); } }, performChange: function(changeType, func) { if (typeof changeType !== "string") throw new TypeError("Invalid non-string changeType"); if (typeof func !== "function") throw new TypeError("Cannot perform non-function"); var data = observed.get(object),
                        prop, changeRecord, thisObj = arguments[2],
                        result = thisObj === _undefined ? func() : func.call(thisObj);
                    data && performPropertyChecks(data, object, changeType); if (data && result && typeof result === "object") { changeRecord = { object: object, type: changeType }; for (prop in result)
                            if (prop !== "object" && prop !== "type") changeRecord[prop] = result[prop];
                        addChangeRecord(object, data, changeRecord); } } }; },
        setHandler = function(object, data, handler, acceptList) { var hdata = handlers.get(handler); if (!hdata) handlers.set(handler, hdata = { observed: createMap(), changeRecords: [] });
            hdata.observed.set(object, { acceptList: acceptList.slice(), data: data });
            data.handlers.set(handler, hdata); },
        addChangeRecord = function(object, data, changeRecord, except) { data.handlers.forEach(function(hdata) { var acceptList = hdata.observed.get(object).acceptList; if ((typeof except !== "string" || inArray(acceptList, except) === -1) && inArray(acceptList, changeRecord.type) > -1) hdata.changeRecords.push(changeRecord); }); };
    observed = createMap();
    handlers = createMap();
    O.observe = function observe(object, handler, acceptList) { if (!object || typeof object !== "object" && typeof object !== "function") throw new TypeError("Object.observe cannot observe non-object"); if (typeof handler !== "function") throw new TypeError("Object.observe cannot deliver to non-function"); if (O.isFrozen && O.isFrozen(handler)) throw new TypeError("Object.observe cannot deliver to a frozen function object"); if (acceptList === _undefined) acceptList = defaultAcceptList;
        else if (!acceptList || typeof acceptList !== "object") throw new TypeError("Third argument to Object.observe must be an array of strings.");
        doObserve(object, handler, acceptList); return object; };
    O.unobserve = function unobserve(object, handler) { if (object === null || typeof object !== "object" && typeof object !== "function") throw new TypeError("Object.unobserve cannot unobserve non-object"); if (typeof handler !== "function") throw new TypeError("Object.unobserve cannot deliver to non-function"); var hdata = handlers.get(handler),
            odata; if (hdata && (odata = hdata.observed.get(object))) { hdata.observed.forEach(function(odata, object) { performPropertyChecks(odata.data, object); });
            nextFrame(function() { deliverHandlerRecords(hdata, handler); }); if (hdata.observed.size === 1 && hdata.observed.has(object)) handlers["delete"](handler);
            else hdata.observed["delete"](object); if (odata.data.handlers.size === 1) observed["delete"](object);
            else odata.data.handlers["delete"](handler); } return object; };
    O.getNotifier = function getNotifier(object) { if (object === null || typeof object !== "object" && typeof object !== "function") throw new TypeError("Object.getNotifier cannot getNotifier non-object"); if (O.isFrozen && O.isFrozen(object)) return null; return retrieveNotifier(object); };
    O.deliverChangeRecords = function deliverChangeRecords(handler) { if (typeof handler !== "function") throw new TypeError("Object.deliverChangeRecords cannot deliver to non-function"); var hdata = handlers.get(handler); if (hdata) { hdata.observed.forEach(function(odata, object) { performPropertyChecks(odata.data, object); });
            deliverHandlerRecords(hdata, handler); } }; })(Object, Array, this);