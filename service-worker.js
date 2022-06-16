let cacheName = 'pwa-v.1.1.0';

function addToCache(cacheName, request, response) {
    caches.open(cacheName)
        .then(cache => { cache.put(request, response) });
}

function preCache() {
    return caches.open(cacheName).then(cache => {
        return cache.addAll([
            '/',
            'modal_files/jquery-1.11.0.js',
            'modal_files/style.css',
            'modal_files/bootstrap.min.js',
            'js/scripts.js',
            'css/style.css',
            'css/colors.css',
            'js/object.observe.polyfill.js',
            'js/array.observe.polyfill.js'
        ]);
    });
}

self.addEventListener('install', (e) => {
    console.log('[ServiceWorker] Installer');
    e.waitUntil(preCache());
});

self.addEventListener('activate', (e) => {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(keyList.map(key => {
                if (key !== cacheName) {
                    console.log('[ServiceWorker] Removing old cache');
                    return caches.delete(key);
                }
            }));
        })
    );
});

self.addEventListener('fetch', (e) => {
    let request = e.request,
        acceptHeader = request.headers.get('Accept');

    if (acceptHeader.indexOf('text/html') !== -1) {
        e.respondWith(
            fetch(request)
            .then(response => {
                if (response.ok)
                    addToCache(cacheName, request, response.clone());
                return response;
            })
            .catch(() => {
                return caches.match(request).then(response => {
                    return response;
                })
            })
        );
    } else if (request.url.indexOf('dragvesti.github.io') !== -1 && (request.url.indexOf('.js') !== -1 || request.url.indexOf('.css') !== -1)) {
        e.respondWith(
            caches.match(request)
            .then(response => {
                let fetchPromise = fetch(e.request).then(networkResponse => {
                    addToCache(cacheName, request, networkResponse.clone());
                    return networkResponse;
                })
                return response || fetchPromise;
            })
        );
    }
});