self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('offline-cache').then(cache => {
            return cache.addAll([
    
                '/daily-tracker/offline.html'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then(response => {
                return response || caches.match('/daily-tracker/offline.html');
            })
        );
    } else {
        event.respondWith(
            fetch(event.request)
        );
    }
});
