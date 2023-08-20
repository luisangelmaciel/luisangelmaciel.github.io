
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
        '/lamp/ie7/ie7.css',
        '/css/img/lamp-icon-black-1B1C24.svg ',
        'https://www.googletagmanager.com/gtm.js?id=GTM-KDD26NF',
        'https://ucarecdn.com/b5f78e7d-9501-4ac2-8419-102da41b5e30/gameappgokuvsmorosalvanosgoku.svg',
        'https://res.cloudinary.com/duv2te3cr/video/upload/v1692496149/iris-xc-la-mas-draga-travel_dirdmx.webm',
        'https://ucarecdn.com/1ac08efc-befa-43d1-aee0-0c766e82ffdf/appescueladebellezaeskareth.svg',
        'https://ucarecdn.com/b4916aca-b04b-4bd9-99ce-299ef6295f4c/-/preview/-/rasterize/', 
        '/img//lamp-3.svg,'
        '/lamp/ie7/ie7.css''
        '/img//lamp-1.svg',
        '/img//lamp-2.svg',
        '/img//lamp-3.svg',       
        'https://www.xbr.pw/game/dinosaur-game-google-chrome/favicon.svg'
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
