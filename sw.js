self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('sxsbwn').then((cache) => cache.addAll([
        './',
        './index.html',
        './bg.svg',
        './style.css',
        './drawing school logo.svg',
        './drawing school logo.png',
        './drawing.svg',
        './exit.svg',
        './nav.svg',
        './notice board.svg',
        './op.svg',
        './results.svg',
        './Untitled-1.svg',
        './waves3.svg',
        './zyro-image.jpg',
      ])),
    );
  });
  
  self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });