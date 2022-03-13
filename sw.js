var cacheName = 'lamp!';
var filesToCache = [
    '/',
    '/manifest.json',
    '/index.html',
    '/404.html',
    '/css/styles.css',
    '/css/w3.css',
    '/js/main.js',
    '/js/entradas.js',
    '/js/lazysizes.min.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});