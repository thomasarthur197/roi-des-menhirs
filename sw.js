/* Mode hors ligne du Roi des menhirs.
   Avec du réseau : on charge toujours la version la plus récente (les corrections arrivent tout de suite).
   Sans réseau : on utilise la copie enregistrée dans le téléphone.
   Augmenter VERSION à chaque mise à jour importante. */
const VERSION = "roi-menhirs-v1";
const FICHIERS = ["./", "index.html", "jeu.js", "manifest.webmanifest", "icone-192.png", "icone-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FICHIERS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(cles => Promise.all(cles.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if(e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then(rep => {
      const copie = rep.clone();
      caches.open(VERSION).then(c => c.put(e.request, copie)).catch(() => {});
      return rep;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match("index.html")))
  );
});
