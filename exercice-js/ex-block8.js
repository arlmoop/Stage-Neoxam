function makeCounter() {
    let count = 0

    return function() {
        count++
        return count
    }
}

const counter = makeCounter()

console.log(counter())
console.log(counter())
console.log(counter())

class Car {
    constructor(vitesse) { 
        this.vitesse = vitesse
    }

    deplacement(temps) {
        let distance = this.vitesse * temps
        console.log(`${distance} km/h`)
    }
}

class Electrical extends Car {
    constructor(vitesse, charge) {
        super(vitesse)
        this.charge = charge
    }

    deplacement(temps) {
        let distance = this.vitesse * temps
        console.log(`${distance} km en electrique ${this.charge} de charge`)
    }
}

const voiture_electrique = new Electrical(78, 1089)
voiture_electrique.deplacement(12)