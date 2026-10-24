var C="coolvo-shell-v1";
self.addEventListener("install",function(e){self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())});
self.addEventListener("fetch",function(e){
 var r=e.request,u=new URL(r.url);
 if(r.method!=="GET"||u.origin!==location.origin)return;
 e.respondWith(fetch(r).then(function(x){var c=x.clone();caches.open(C).then(function(k){k.put(r,c)});return x}).catch(function(){return caches.match(r)}))});
