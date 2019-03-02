const cacheName = 'v2';

const cacheAssets = [
  'index.html',
  'about.html',
  '/js/main.js',
  '/css/style.css'
]

self.addEventListener('install', (event) => {

  console.log('Service Worker : Installed');

  event.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {

        cache.addAll(cacheAssets);
        console.log('Service Worker : Cache');
      })
      .then(() => self.skipWaiting()
      )
  );
})

self.addEventListener('activate', (event) => {

  console.log('Service Worker : Activate ');

  caches.keys()
    .then(cacheNames => {

      return Promise.all(

        cacheNames.map(cache => {

          if (cache !== cacheName) {
            caches.delete(cache);
          }
        })
      );
    })

})

self.addEventListener('fetch', (event) => {

  event.respondWith(

    fetch(event.request)
      .catch(() => {

        return caches.match(event.request)
      })
  )
})