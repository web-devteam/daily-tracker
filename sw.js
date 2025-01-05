self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('offline-cache').then(cache => {
            return cache.addAll([
                '/',
                '/offline.html',
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match('/offline.html')
        );
    } else {
        event.respondWith(
            fetch(event.request)
        );
    }
});
