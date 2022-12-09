self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('sxsbwn').then((cache) => cache.addAll([
        './',
        './index.html',
        './bg.svg',
        './style.css',
        './drawing school logo.svg',
      ])),
    );
  });
  
  self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });