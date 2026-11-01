// Keeps a copy of the app on the phone so it opens with no internet.
// Bump VERSION whenever the app changes, so phones pick up the new copy.
const VERSION = 'alpha-womb-3';
const FILES = ['./', 'index.html', 'manifest.json', 'icon-180.png', 'icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))));
  self.clients.claim();
});
// Try the internet first (to get updates), fall back to the saved copy.
self.addEventListener('fetch', e => {
  e.respondWith(
    // no-store: skip the phone's web cache, which can hold an old copy for up to 10 minutes
    fetch(e.request, { cache: 'no-store' }).then(r => {
      const copy = r.clone();
      caches.open(VERSION).then(c => c.put(e.request, copy));
      return r;
    }).catch(() => caches.match(e.request))
  );
});
