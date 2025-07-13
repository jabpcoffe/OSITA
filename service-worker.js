
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('osita-cache').then(cache => {
      return cache.addAll([
        'index.html',
        'calculadora_osita.css',
        'calculadora_osita.js',
        'manifest.json',
        'icon-192.png',
        'icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
