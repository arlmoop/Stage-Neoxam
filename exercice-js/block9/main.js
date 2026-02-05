export function add (a, b) {
    return a + b
}

function addition (a, b) {
    if (typeof a === "string" || typeof b === "string") {
        throw new Error("Les paramètres doivent être des nombres")
    } else {
        return a + b
    }
}

try {
    console.log(addition(3, "4"))
} catch (error) {
    console.log(error.message)
}

function f() {
    console.log()
}

window.setInterval(f, 1000)

export function charge_dynamique () {
    alert.console("le module est chrgé dynamiquement")
}