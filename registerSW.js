if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/dinogame/sw.js', { scope: '/dinogame/' })})}