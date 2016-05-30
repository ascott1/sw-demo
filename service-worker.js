var cacheVersion = 'v1';

filesToCache = [
  '/',
  '/index.html',
  '/about.html',
  '/css/main.css',
  '/js/main.js',
  '/img/gear.png'
]

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheVersion)
      .then( function( cache ) {
        return cache.addAll( filesToCache );
    })
  );
});

self.addEventListener( 'fetch', function( event ) {
  event.respondWith(
    caches.match( event.request )
      .then( function( response ) {
        return response || fetch( event.request );
    })
  );
});
