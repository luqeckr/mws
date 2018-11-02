const CACHE='mws-cache';

self.addEventListener('install', function(event) {
    console.log('Service worker installing...');
    event.waitUntil(
        caches.open(CACHE).then(function(cache) {
        return cache.addAll([
            '/',
            'favicon.ico',
            '/css/style.css',
            '/images/icon-l.png',
            '/images/icon-home.png',
            '/images/icon-telegram.svg',
            '/images/icon-twitter.svg',
            '/images/icon-facebook.svg',
            '/images/icon-github.svg',
            '/images/mws.png',
            '/images/photo-normal.jpg',
            '/images/photo-small.jpg',
            '/images/disconnected.png',
            '/project1/add2numbers.html',
            '/project2/leaflet1.html',
            '/project3/leaflet2.html'
        ])
        }
    ));
});

self.addEventListener('activate', function(event) {
    console.log('Service worker activating...');
    event.waitUntil(
        update(event.request)
    );
});

self.addEventListener('fetch', function(event) {
    if (event.request.url.slice(0,4)=='http') {
        // console.log(event.request.url)
        event.respondWith(
            caches.match(event.request).then((response)=>{
                    return response || fetch(event.request.url).then((resp)=> {
                        let clres = resp.clone();
                        // console.log(resp)
                        // res.type=basic atau event.requent.type=no-cors
                        if (event.request.type!='cors') {
                            caches.open(CACHE).then((cache)=> {
                                // console.log(cache)
                                // console.log('going to cache: ', event.request.url)
                                return cache.put(event.request, clres);
                            })
                        }
                        return resp;
                    });
                
            }).catch(err => {
                console.log(event.request.url);
                if (event.request.destination == 'image') return caches.match('/images/disconnected.png');
                return fetch(event.request.url);
            })
        )
    }
});

function update(request) {
    return caches.open(CACHE).then(function (cache) {
      return fetch(request).then(function (response) {
        return cache.put(request, response.clone()).then(function () {
          return response;
        });
      });
    });
  }