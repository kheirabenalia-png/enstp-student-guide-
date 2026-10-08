// ============================================
// sw.js — Service Worker
// Guide de survie ENSTP
// يعمل بدون إنترنت بعد أول تحميل
// ============================================

const CACHE_NAME = 'enstp-guide-v2.0.0';
const CACHE_EXTERNAL = 'enstp-external-v2.0.0';
const OFFLINE_URL = './index.html';

const CORE_ASSETS = [
  './',
  './index.html',
  './guide.html',
  './data.js',
  './search.js',
  './theme.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

const EXTERNAL_ASSETS = [
  'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',
  'https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80',
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80',
  'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80'
];

self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(CORE_ASSETS).catch(err => console.log('[SW] Core err:', err));
      }),
      caches.open(CACHE_EXTERNAL).then((cache) => {
        return Promise.all(
          EXTERNAL_ASSETS.map(url => cache.add(url).catch(() => {}))
        );
      })
    ]).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME && k !== CACHE_EXTERNAL).map(k => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  if (!request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) {
        fetch(request).then((response) => {
          if (response && response.status === 200) {
            const cacheName = request.url.startsWith(self.location.origin) ? CACHE_NAME : CACHE_EXTERNAL;
            caches.open(cacheName).then((cache) => {
              cache.put(request, response.clone()).catch(() => {});
            });
          }
        }).catch(() => {});
        return cached;
      }

      return fetch(request).then((response) => {
        if (!response || response.status !== 200) return response;
        const responseClone = response.clone();
        const cacheName = request.url.startsWith(self.location.origin) ? CACHE_NAME : CACHE_EXTERNAL;
        caches.open(cacheName).then((cache) => {
          cache.put(request, responseClone).catch(() => {});
        });
        return response;
      }).catch(() => {
        if (request.destination === 'document') {
          return caches.match(OFFLINE_URL);
        }
        if (request.destination === 'image') {
          return new Response(
            '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150"><rect fill="#e5e1d8" width="200" height="150"/><text x="100" y="80" text-anchor="middle" fill="#94a3b8" font-family="sans-serif" font-size="14">Hors ligne</text></svg>',
            { headers: { 'Content-Type': 'image/svg+xml' } }
          );
        }
      });
    })
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});
