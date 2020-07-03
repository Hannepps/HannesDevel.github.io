'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f6255bb01c648fe967714d52a89e8e9c",
".git/config": "3a4c401f39a72a408343563d670ae72c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "031b2535af20bf4de7bda4965b188dc8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fccc37273f0888666c20fba25388c2e6",
".git/logs/refs/heads/master": "fccc37273f0888666c20fba25388c2e6",
".git/logs/refs/remotes/origin/master": "30d9ef86e43d8d80166cf65e1d54179e",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/867a44e5d14597ea672e85548017ad57b5d8f8": "297fde7a6238477a3d75f6412482ca25",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1c/332d0910ee39611a5a82025fb77f6fdd95861e": "4af31f8e5e08c4856ef08526c03172a4",
".git/objects/20/0709f04eed6d50fbabda3ae22d7e144ea16c80": "4418e1b1c8c783d52acae744b0030ad8",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/33/63f36e0f2ce03c6d6e5638281b6e2661ac024a": "63b7b753d31eddbe1d80664234dfe4b6",
".git/objects/34/f6487d4b357f9725c367bc572d2b837516071d": "87018bf4954354d21f12a0b8a79fe12b",
".git/objects/3a/2df66470855854c18b17f3b5586279cbd5601e": "4605feeaeacf4cc26d841adb4944ea8c",
".git/objects/3b/ed33d968eca635bee4a97775378dbd34a271cb": "4fbc421740350ae5d5029aa4415b258e",
".git/objects/41/d1b62aacea725576fca760f024bd4031df983b": "0a59608763ca2adee6eab14edc50a914",
".git/objects/48/8c5db5e8a15f89f151f509ea927c97565d16b9": "1b59b303a3e0e89e0af5f96066efd4de",
".git/objects/4d/dcb1c0db0fb256cbb45c3889d5809d04a90f46": "29b9ab288e5d44120d588dede8dc3364",
".git/objects/55/cdda9ef5db3495d0a20915cfd8aefaeaa6b77e": "e6748f5a636860c3b40c675e296bacb1",
".git/objects/57/6885e0921ad8e0892a5df436b1fe75d789a4b0": "2e6ecffe5d5f18130aa0b96f0241f263",
".git/objects/5b/dcc18c51fe9e2d766b31bcb522bd2b463b0bb2": "c36dc3bbd08a86087ddf895967980720",
".git/objects/68/c3e69c89a116adac5035b7bad08ef8f693c134": "b032ce762882fb977525314e048dd7df",
".git/objects/69/4469b548badb2cfa01b933bdf61d944bb7cada": "986de75bccb157e50b3983331f7fabe6",
".git/objects/74/6ea4af6557a515c1adb53061e0e5f671c7a1ad": "3e9e8a42b64c4e41539f8e5acec998d9",
".git/objects/7d/fcf7bb8ad86ab3c9139852877ca9bb1e0b6c7d": "26ed958f73d58b0fafbb94aa4c1a9e7c",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/0fe9780a4b26f6c84bd97b76d2d6d8c1225ee6": "76ad86d784a731a018d2020bde4e9ed3",
".git/objects/8d/31fa8621dc60d04e1efbcf3e46cde2a2f191d2": "3e46ebb0efdf503e7e81f33f841861a8",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/96/66244325360d90ccb7943f4a1b8e3c48d24bf0": "0cb5a2e5cbf374f29cd5f38752bb0f40",
".git/objects/9e/ca3f7f3465f73689628b66b9c78cd643bc3358": "d66264713bb82494d5d5c7ef723ceb1e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/13041c5191e9c0d851913cde0eb76dc4a8c0d5": "793e01f09fbeb8eea31a53b3af71c43b",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e0/9eda9f3cf081665d301270951d5811bdf7f20d": "2d326ad08e1c31b49c7c7fb9225aed04",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "f130be427bb0fd0e08368bb908861308",
".git/refs/remotes/origin/master": "f130be427bb0fd0e08368bb908861308",
"assets/AssetManifest.json": "bcb8b376179cbd5246976417c31097be",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/lib/assets/icon.png": "32429aa444aa1955ed8d392b26abd90a",
"assets/lib/assets/Icons/camera.png": "250fa13019599e3ab672603719d6f316",
"assets/lib/assets/Icons/games.png": "74197dc1ca46e36b7f2b9b765c41e511",
"assets/lib/assets/Icons/hangUp.png": "4102b2d71e7e51a0781278c7dde163d7",
"assets/lib/assets/Icons/profile.png": "84975b7b945cad352ed2de3ffe4fe8f8",
"assets/lib/assets/Photos/markus.png": "2e936575cac0266d1eb1e1550292893a",
"assets/lib/assets/Photos/tina.png": "31382f7b0d2441b5ac4417b0705d7044",
"assets/lib/assets/stock_profile.png": "8c08a809e884e82c21abd3e1ddd79ee2",
"assets/NOTICES": "41a3c047211ee3b3896ad68b6c2b3a9a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "618aa210736a348248722fca1d4dd673",
"/": "618aa210736a348248722fca1d4dd673",
"main.dart.js": "14d8807184e2e56040e3b91a881f3936",
"manifest.json": "4426a798eddec88ad73fe45c38356179"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
