if ("serviceWorker" in navigator) {
    navigator.seriveWorker.register("/sw.js")
        .then(() => console.log("Service Worker enregistré"))
        .catch(err => console.error("Erreur dans le service worker", err))
}