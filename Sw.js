// ============================================
// Service Worker — Guide de survie ENSTP
// يجعل التطبيق يعمل بدون إنترنت
// ============================================

const CACHE_NAME = 'enstp-guide-v1.0.0';
const OFFLINE_URL = './index.html';

// الملفات الأساسية التي تُخزَّن عند التثبيت
const CORE_ASSETS = [
  './',
  './index.html',
  './guide.html',
  './data.js',
  './manifest.json'
];

// ============================================
// التثبيت: خزّن الملفات الأساسية
// ============================================
self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CORE_ASSETS).catch((err) => {
        console.log('[SW] Cache error:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// ============================================
// التنشيط: احذف النسخ القديمة
// ============================================
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => {
          console.log('[SW] Deleting old cache:', key);
          return caches.delete(key);
        })
      );
    }).then(() => self.clients.claim())
  );
});

// ============================================
// الجلب: Cache First مع تحديث في الخلفية
// ============================================
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // تجاهل: طلبات غير GET (POST, etc.)
  if (request.method !== 'GET') return;

  // تجاهل: طلبات خارجية (YouTube, Google Maps, CDN)
  if (!request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) {
        // حدّث الكاش في الخلفية (Stale-While-Revalidate)
        fetch(request)
          .then((response) => {
            if (response && response.status === 200) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(request, response.clone());
              });
            }
          })
          .catch(() => {});
        return cached;
      }

      // الملف غير مخزّن: اجلبه من الشبكة
      return fetch(request)
        .then((response) => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // فشل الشبكة والملف غير مخزّن
          if (request.destination === 'document') {
            return caches.match(OFFLINE_URL);
          }
        });
    })
  );
});

// ============================================
// رسائل من التطبيق (لتحديث فوري)
// ============================================
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
