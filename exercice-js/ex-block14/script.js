class MyCard extends HTMLElement {
    constructor() {
        super()
        console.log("Element Mycard créé")
        this.attachShadow({mode: "open"})
        this.textContent = "Texte affiche dans la balise my-card"

        this.shadowRoot.innerHTML = `
            <style>
                .my-card {
                    border: 2px solid red;
                    padding:12px;
                }

                #valid {
                    width: 20px;
                    height: 10px;
                    border: 2px solid black;
                }

                #list li {
                    background: #b5e7ff;
                    padding: 5px 5px 5px 0px;
                }
            </style>

            <div class="my-card">
                <h1>TODO LIST</h1>

                <input id="champ-input">
                <button id="valid">
            </div>
            <div>
                <ul id="list">

                </ul>

                <button id="clean-list">
            </div>
            `
    }
}

customElements.define("my-card", MyCard) // Le nom doit obligatoirement contenir un "-"

const card = document.querySelector("my-card")
const shadow = card.shadowRoot

const input = shadow.querySelector("#champ-input")
const button = shadow.querySelector("#valid")
const ul = shadow.querySelector("#list")
const clean_button = shadow.querySelector("#clean-list")

clean_button.textContent = "Clean All"

let tasks = []
tasks = JSON.parse(localStorage.getItem("tasks")) || []

tasks.forEach(task => {
    const li = document.createElement("li")
    add_li_eventListener(li)
    li.textContent = task
    ul.appendChild(li)

})

button.addEventListener("click", () => {
    const task = input.value
    if (task.length == 0) return
    tasks.push(task)
    console.log(tasks)
    const li = document.createElement("li")
    li.textContent = task
    ul.appendChild(li)

    saveTasks()

    add_li_eventListener(li)
})

function add_li_eventListener (li) {
    li.addEventListener("click", () => {
        const index = tasks.indexOf(tasks)
        tasks.splice(index, 1)

        li.remove()
        saveTasks()
    })
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

clean_button.addEventListener("click", () => {
    tasks = []
    ul.innerHTML = ""
    localStorage.removeItem("tasks")
})