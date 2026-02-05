let a = [1, 2, 3, 4]

let b = a
b.push(10)
console.log(a)

let c = [...a]
c.push(20)
console.log(a)

let d = Object.assign([], a)
d.pop()
console.log(a)

let e = structuredClone(a)
e.pop()
console.log(a)