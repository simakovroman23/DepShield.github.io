"use strict";var precacheConfig=[["/index.html","ff2054ac87731d9bac60484eb26d9f71"],["/static/css/main.18a8b107.css","410e8ecb2f1a605d42f5170dc107330f"],["/static/js/main.69a3df51.js","5d0df80fa4ef074cd708c905fd853a28"],["/static/media/ProximaNova-Bold-webfont.0988922e.woff","0988922e8ed380689ca54855833342c9"],["/static/media/ProximaNova-Bold-webfont.4d4031d4.eot","4d4031d425cd5a78594bf94b583c40f9"],["/static/media/ProximaNova-Bold-webfont.5a8bc550.ttf","5a8bc5505bfb146cb8fecd2804b116eb"],["/static/media/ProximaNova-Bold-webfont.5ed65258.woff2","5ed65258519fe2c7c00912300061282d"],["/static/media/ProximaNova-Bold-webfont.7e40079e.svg","7e40079e3e5acbb38e921037f548ee34"],["/static/media/ProximaNova-Reg-webfont.2d636d93.woff2","2d636d9395b2da27ce67040250333ca4"],["/static/media/ProximaNova-Reg-webfont.5d0e746a.woff","5d0e746af028be8766181f227b3e87d1"],["/static/media/ProximaNova-Reg-webfont.70a53725.eot","70a537253a0427af6534842b8b2c3b2e"],["/static/media/ProximaNova-Reg-webfont.ba9eadeb.svg","ba9eadeb7b4a81dbf118d1f071ea9abe"],["/static/media/ProximaNova-Reg-webfont.bbb80813.ttf","bbb808133b0eba2f0917fbc4e9b88a28"],["/static/media/ProximaNova-Sbold-webfont.4422354e.eot","4422354e6ede961bef726afa1be9522b"],["/static/media/ProximaNova-Sbold-webfont.6c1b0f2a.svg","6c1b0f2a27368ddc12cdd62d70ba9c7a"],["/static/media/ProximaNova-Sbold-webfont.a96ff447.woff2","a96ff4477074c6395b7305d2d98fde8e"],["/static/media/ProximaNova-Sbold-webfont.bba11955.woff","bba11955959ea56cb0c1ae3d3b9b9b2a"],["/static/media/ProximaNova-Sbold-webfont.fbfe5c8a.ttf","fbfe5c8a6f2ad5350380f04fe09ba44f"],["/static/media/ProximaNova-Thin-webfont.3ab5765b.woff2","3ab5765bef19fc1aa206c29cda460a52"],["/static/media/ProximaNova-Thin-webfont.87f04f55.svg","87f04f5560d3bfb64e6ec4c725e893a1"],["/static/media/ProximaNova-Thin-webfont.964230c9.eot","964230c9237c839c06e7d44f634c2c64"],["/static/media/ProximaNova-Thin-webfont.cdd2aa79.woff","cdd2aa79aa4f61fa4298595d7a3b04ce"],["/static/media/ProximaNova-Thin-webfont.e5a1d906.ttf","e5a1d9064867b89e329a7a74c9962397"],["/static/media/circle-available-languages.cdd1ead5.png","cdd1ead595b6a332fc5389e8b7c9ccf4"],["/static/media/circle-continuous-monitoring.5873fb73.png","5873fb73ecc728f099049e9095dcd86a"],["/static/media/circle-github.94399ee0.png","94399ee0f700eb3270f5f3e0ee6f2c96"],["/static/media/logo.5eed3e39.png","5eed3e39f3f89c5ff79a1a1f33bcd2f8"],["/static/media/screenshot-issue-list.eb769778.png","eb76977822382e9add8e8d755746adea"],["/static/media/screenshot-issue.8b77da77.png","8b77da77aab11bca484f9fea38b4f1a0"],["/static/media/screenshot-oss-index.d4f5ef13.png","d4f5ef139405b548e45f080eb4433c27"],["/static/media/screenshot-transitive.b257b86e.png","b257b86e9f9f508f79823eae98b760d4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});