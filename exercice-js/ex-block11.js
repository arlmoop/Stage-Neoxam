const set = new Set([1, 2, 2, 3])

console.log(set)

function* generator () {
    yield 1
    yield 2
    yield 3
}

const gen = generator()

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

const fonction = (f, g) => x => f(g(x))

const multiply_3 = x => x * 3
const add_10 = x => x + 10

console.log(fonction(multiply_3, add_10)(1))

const multiply = a => b => c => a * b * c
console.log(multiply(1)(2)(10))

const person = {
    name: "Aure",
    age: 12,
    adress: "avenue de paris"
}

for (const p in person) {
    console.log(person[p])
}