if ('serviceWorker' in navigator) {

  window.addEventListener('load', () => {

    navigator.serviceWorker
      .register('../sw_cached_pages.js')
      .then(reg => console.log('service Worker: Registered'))
      .catch(error => console.log(`Service Worker error: ${error}`))
  });
}