if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', {scope: '/'})
        .then ( () => console.log('Service Worker registered'))
        .catch( (error) => console.log('Error: Gagal melakukan registrasi service workder:', error) ) 
} else {
    console.log('browser tidak mendukung service worker');
}
