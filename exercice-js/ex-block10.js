function wait () {
    return new Promise((resolve, reject) => {
        setTimeout(() => { console.log("attente de deux secondes")}, 2000)
    })
}

//wait()

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

async function add_data () {
    const fetch_1 = fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json)

    const fetch_2 = fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json)

    const [a, b] = await Promise.all(fetch_1, fetch_2)

    console.log(a)
    //console.log(b)
}