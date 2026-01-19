const socket = new WebSocket("wss://echo.websocket.org")

console.log()

socket.onopen = () => {
    console.log("La connexion a été ouverte")
    socket.send("Envoie ca au serveur")
}

console.log()

socket.onmessage = (event) => {
    console.log("Message recu du serveur", event.data)
}

console.log()

socket.onerror = (error) => {
    console.error("Erreur WebSocket :", error)
}

console.log()

socket.onclose = () => {
    console.log("Le WebSocket est ferme")
}

const today = new Date()

const dateFR = new Intl.DateTimeFormat("fr-FR").format(today)
console.log("Francais :", dateFR)

const dateJP = new Intl.DateTimeFormat("jp-JP").format(today)
console.log("Japon : ", dateJP)