// Service Worker cache is independent from IndexedDB/localStorage app data.
// Bump CACHE_VERSION on every release to ensure users receive fresh assets.
const CACHE_PREFIX = 'twitter-simulator-static';
const CACHE_VERSION = 'v2'; // TODO: bump per release, e.g. v3 / 2026-02-07
const CACHE_NAME = `${CACHE_PREFIX}-${CACHE_VERSION}`;

const PRECACHE_URLS = [
  './',
  './index.html',
  './css/style.css',
  './js/data.js',
  './js/image-store.js',
  './js/app.js',
  './manifest.webmanifest',
  './assets/icon.svg',
  './HOW_TO_USE.md'
];

async function precache() {
  const cache = await caches.open(CACHE_NAME);
  // Use cache:reload to bypass HTTP cache when refreshing on a new SW install.
  await cache.addAll(PRECACHE_URLS.map((url) => new Request(url, { cache: 'reload' })));
}

async function cleanupOldCaches() {
  const keys = await caches.keys();
  const ours = keys.filter((key) => key.startsWith(`${CACHE_PREFIX}-`) && key !== CACHE_NAME);
  await Promise.all(ours.map((key) => caches.delete(key)));
}

async function networkFirst(request, fallbackUrl = './index.html') {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    const cached = await cache.match(request);
    if (cached) return cached;
    return cache.match(fallbackUrl);
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);

  const fetchPromise = fetch(request)
    .then((response) => {
      if (response && response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => null);

  return cached || (await fetchPromise);
}

self.addEventListener('install', (event) => {
  event.waitUntil(precache());
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(cleanupOldCaches());
  self.clients.claim();
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  // Don't try to cache cross-origin.
  if (url.origin !== self.location.origin) return;

  // Always try to refresh navigations/HTML first so users see new UI quickly.
  if (event.request.mode === 'navigate' || (event.request.headers.get('accept') || '').includes('text/html')) {
    event.respondWith(networkFirst(event.request, './index.html'));
    return;
  }

  // Assets: serve cached fast, refresh in background.
  event.respondWith(staleWhileRevalidate(event.request));
});
