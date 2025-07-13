const CACHE_NAME = 'mahdi-najar-resume-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/images/logo.svg',
  '/assets/images/profile.png',
  '/assets/fonts/Vazir-Regular.woff2',
  '/assets/fonts/Vazir-Bold.woff2'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});