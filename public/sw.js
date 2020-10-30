let CACHE_NAME = 'my-site-cache-v1';
let urlsToCache = [
  'index.html',
]


self.addEventListener('install', function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log("Opened cache");
        return cache.addAll(urlsToCache)
      })
  )
})


self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request)
          .catch(() => caches.match('offline.html'))
      })
  )
})

self.addEventListener('activate', function (event) {

  let cahcheAllowList = []
  cahcheAllowList.push(CACHE_NAME)

  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (!cahcheAllowList.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    })
  )
})