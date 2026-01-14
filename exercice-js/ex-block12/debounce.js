function debounce(fn, delay) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => fn(...args), delay)
    }
}

const input = document.getElementById("search")

const handleSearch = debounce((query) => {
    console.log("recherche :", query)
}, 500)

input.addEventListener("input", (e) => {
    handleSearch(e.target.value)
})