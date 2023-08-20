
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
    '/preloader.js',
    '/style.css',
    '/js/fontawesome-1d9115e34a.js',
    '/img/lamp-loader.svg',       
    '/js/random-quotes.js',  
    '/js/tiempo-que-llevas-leyendo-esto.js',  
    '/favicon.svg',
    '/lamp-desing.svg',  
    '/js/scripts.js',  
    '/js/object.observe.polyfill.js',  
    '/img/lamp-icon-black-1B1C24.svg ',  
    '/js/lazysizes.min.js',
    '/lamp/style.css',
    '/lamp/ie7/ie7.css'
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
