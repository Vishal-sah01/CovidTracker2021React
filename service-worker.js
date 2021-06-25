if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"2b288816e7f07a5766183d03eab8ee89","url":"404.html"},{"revision":"0c209acdd19f6732370568f7a6ae0bdf","url":"ece08537062c28a2a7c1.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"2b288816e7f07a5766183d03eab8ee89","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"1139c7f91659b8d1e1f13fd2fdfdf753","url":"static/css/21.f5f9d973.chunk.css"},{"revision":"b4b3c760dbe3db2062b79c5a89fc9fb1","url":"static/css/22.16880a0d.chunk.css"},{"revision":"17c389cf17272b648b44e76c5263a4fd","url":"static/js/0.ad9a7acd.chunk.js"},{"revision":"ad3248b53d97a95fa96cc6387914fb3b","url":"static/js/1.39f936f4.chunk.js"},{"revision":"7c7fba8455ba0f61057ce9b5d94a89f1","url":"static/js/12.708374b5.chunk.js"},{"revision":"342cdb173bdd5a526cb27b9498652a0d","url":"static/js/13.bac3c8d7.chunk.js"},{"revision":"06ede1780c55baaa051dfe952cccf43b","url":"static/js/14.6b1359a2.chunk.js"},{"revision":"943249ace7867daf404c1716c3e0762c","url":"static/js/15.39b08501.chunk.js"},{"revision":"4e5560aa4b9fb521021202df69e4054b","url":"static/js/16.cb8243eb.chunk.js"},{"revision":"6cad5b48cb65e3c3dd3b3e26565e9426","url":"static/js/17.9777499c.chunk.js"},{"revision":"6a7e6b917c5dc23edaaf22c1ed8218fc","url":"static/js/18.2126ba03.chunk.js"},{"revision":"2e883baa61f1e9944ff86d2378ceced8","url":"static/js/19.8841cc26.chunk.js"},{"revision":"1719be0aed4a647ef0a0b11dca617c68","url":"static/js/2.2d42af5e.chunk.js"},{"revision":"641c9713df33b92d16e9db8bba92aa92","url":"static/js/20.5d018e50.chunk.js"},{"revision":"4f65001835a3ed4c0a07fef5afdd34ed","url":"static/js/21.ed09d9fa.chunk.js"},{"revision":"8d5886db47fa395cc180e0adb0ec1d5c","url":"static/js/22.d31d4202.chunk.js"},{"revision":"b72bef9d3cbb2e02dc3a46ebf9a986ab","url":"static/js/23.3ac85985.chunk.js"},{"revision":"32e3c62280f764b24c6d6874cbf69bb6","url":"static/js/24.6d667e11.chunk.js"},{"revision":"a170399b3f760b69342336834daf0053","url":"static/js/25.9062cf83.chunk.js"},{"revision":"58b800caabd88640b67204cf76524405","url":"static/js/26.cefe66bc.chunk.js"},{"revision":"6a4dcacf4e2b936a1e9b206f6b75f999","url":"static/js/27.2c753fc5.chunk.js"},{"revision":"7083a8ba18c18d43e5f9799ead459c03","url":"static/js/28.e64f9bd9.chunk.js"},{"revision":"34dd52f6bffd20270fa496bc4706c580","url":"static/js/29.137ac9b2.chunk.js"},{"revision":"999ffd4366c1c19c30b48aa8d586ba41","url":"static/js/3.40287271.chunk.js"},{"revision":"237fb29f0fa3aa042ceea73d33ac8292","url":"static/js/30.d8d58f0a.chunk.js"},{"revision":"0138912f3407385a6cebc3cd2ed35edc","url":"static/js/31.c52cbc2c.chunk.js"},{"revision":"7313c2e0788f6f69c2d70f726096b381","url":"static/js/32.2d389060.chunk.js"},{"revision":"2a43928c9f22299f39d611c3ccc409d3","url":"static/js/33.aeec6e52.chunk.js"},{"revision":"e93ba984d6af6c332a9779830e4202d5","url":"static/js/34.0b832979.chunk.js"},{"revision":"6801b228d14c77c09c2b0b0d34a13d2b","url":"static/js/35.abc023e3.chunk.js"},{"revision":"33882fe4a587148bac7ba898b8f4683b","url":"static/js/36.ad602a3e.chunk.js"},{"revision":"3d6100492a68f73dfd881f35b9cbc47f","url":"static/js/37.184adb8f.chunk.js"},{"revision":"8ee8619dd64c207df5ca4b1def3fdb7f","url":"static/js/38.7a573318.chunk.js"},{"revision":"2410f90067f74c335b38a2e23e3cd443","url":"static/js/39.7a5b9293.chunk.js"},{"revision":"e0450f8439a75e23a0b36876cd4ed985","url":"static/js/4.fff38bbd.chunk.js"},{"revision":"1a7c2688ec9e53b417660d4bc1c6bbc2","url":"static/js/40.960215c8.chunk.js"},{"revision":"f4b10cf2d53895df293062e1474a4f26","url":"static/js/41.d52a9624.chunk.js"},{"revision":"fafc828dacea2101f8528348f5d4b9b1","url":"static/js/42.b1979d79.chunk.js"},{"revision":"7150928f6d6995231f89986e8657a457","url":"static/js/43.e70b7b4b.chunk.js"},{"revision":"7439fb3a580d8538069c134524c8d0ff","url":"static/js/44.80b02e63.chunk.js"},{"revision":"5017274c47fd2275f0f8e4255cdc2440","url":"static/js/45.52dbc68a.chunk.js"},{"revision":"12da2d4dcdadcdcf3bbb95f182681864","url":"static/js/46.787d435c.chunk.js"},{"revision":"63bc879f94d8e5de52f9aebe8ea89ce6","url":"static/js/47.f59ff91e.chunk.js"},{"revision":"3fe53582a410ab46a4503e9c4d26ae68","url":"static/js/5.13c10a2c.chunk.js"},{"revision":"fbb2226001cf2a4fddf2f908c9522acb","url":"static/js/6.1023a391.chunk.js"},{"revision":"666c1ba1cab90d93658d1527f90e1d89","url":"static/js/7.6f9a959e.chunk.js"},{"revision":"5c10b3d7e41cc0ddf50b8821ffc69615","url":"static/js/8.4299a43f.chunk.js"},{"revision":"6eb90f76217f763d5852ff27bee3b1c5","url":"static/js/9.62dab92d.chunk.js"},{"revision":"933f49fd7c29bcdd39b605939c10f95c","url":"static/js/main.948e5636.chunk.js"},{"revision":"965b3500546464acbc094703d3dd96aa","url":"static/js/runtime-main.83ad7bd1.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
