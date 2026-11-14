const CACHE_NAME = 'adita-praja-v4';
const urlsToCache = ['./', './index.html', './anggota.html', './admin.html', './style.css', './app.js'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(urlsToCache))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(res => res || fetch(e.request))));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => { if(k !== CACHE_NAME) return caches.delete(k); })))));
