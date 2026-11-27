// Service worker minimal: syarat install PWA.
// Sengaja TIDAK meng-cache apa pun supaya galeri, PIN, dan pilihan foto
// selalu diambil langsung dari server (Google Apps Script).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
