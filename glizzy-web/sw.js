const CACHE = 'glizzy-button-v1';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.webmanifest',
  './assets/glizzy.mp3',
  './assets/hotdog_1.png',
  './assets/hotdog_2.png',
  './assets/hotdog_3.png',
  './assets/hotdog_4.png',
  './assets/hotdog_5.png',
  './assets/hotdog_6.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(resp => resp || fetch(event.request)));
});
