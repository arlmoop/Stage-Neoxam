let numbers = [1, 2, 3, 4, 5]

numbers.push(6)
console.log(numbers)

numbers.pop()
console.log(numbers)

let square_numbers = numbers.map(n => n * n)
console.log(square_numbers)

let even_numbers = numbers.filter(n => n%2 == 0)
console.log(even_numbers)

let reduce_numbers = numbers.reduce( (acc, sum) => { return sum + acc }, 0)
console.log(reduce_numbers)

person = {
    name: "azert",
    age: 24
}

console.log(person.name, person["age"])