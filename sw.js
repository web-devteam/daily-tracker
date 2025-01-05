const CACHE_NAME = 'offline-cache';
const OFFLINE_URL = '/daily-tracker/offline.html'; // Update the path based on your repo name

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll([OFFLINE_URL]);
        })
    );
});

self.addEventListener('fetch', event => {
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request).catch(() => {
                return caches.open(CACHE_NAME).then(cache => {
                    return cache.match(OFFLINE_URL);
                });
            })
        );
    }
});
