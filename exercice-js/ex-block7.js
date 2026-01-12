multiply = (a, b) => a * b

sumAll = (...numbers) => numbers.reduce( (acc, n) => acc + n, 0)

console.log(sumAll(1, 2, 3, 4, 5))

person = {
    first: "Alice",
    last: "Smith"
}

const {first, last} = person

let message = `Hello, ${first} ${last}`
console.log(message)