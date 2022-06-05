window.addEventListener('load', e => {
    new PWAConfApp();
    registerSW(); (1)
  });

  async function registerSW() { (1)
    if ('serviceWorker' in navigator) { (2)
      try {
        await navigator.serviceWorker.register('/02/sw.js'); (3)
      } catch (e) {
        alert('ServiceWorker registration failed. Sorry about that.'); (4)
      }
    } else {
      document.querySelector('.alert').removeAttribute('hidden'); (5)
    }
  }

  self.addEventListener('install', async event => {
    console.log('install event')
  });
  
  self.addEventListener('fetch', async event => {
    console.log('fetch event')
  });

  const cacheName = 'pwa-conf-v1';
  const staticAssets = [
    '/02/',
    '/02/index.html',
    '/02/app.js',
    '/02/styles.css'
  ];

  self.addEventListener('install', async event => {
    const cache = await caches.open(cacheName); (1)
    await cache.addAll(staticAssets); (2)
  });