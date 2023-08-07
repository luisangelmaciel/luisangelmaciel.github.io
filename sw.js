
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('pwa-assets').then(cache => 
      {
        return cache.addAll([
   '/manifest.json',
    '/index.html',
    '/404.html',
    '/css/styles.css',
    '/css/w3.css',
    '/js/main.js',
    '/js/entradas.js',
    '/js/lazysizes.min.js'
        ])
      })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});



});
