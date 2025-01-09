const CACHE_NAME = 'dailytrackerpagesv1';
const urlsToCache = ['/daily-tracker/','/daily-tracker/index.html','/daily-tracker/index.css','/daily-tracker/index.js','/daily-tracker/1432527.png','/daily-tracker/256px-Spotify_icon.svg.png','/daily-tracker/pngwing.com (1).png','/daily-tracker/Youtube Music Icon (PNG480p) - Vector69Com.png','/daily-tracker/more_vert_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png','/daily-tracker/add_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png','/daily-tracker/bar_chart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png','/daily-tracker/calendar_month_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png','/daily-tracker/chevron_left_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png','/daily-tracker/chevron_right_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(response => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          return response;
        });
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
