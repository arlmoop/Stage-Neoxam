/*for (let i = 1; i < 21; i++) {
    if (i % 2 == 0)
        console.log(i);
}*/

let i = 0;

while (i != 20) {
    let numero_jour = i % 7;
    let week_end;

    if (numero_jour != 5 && numero_jour != 6) { 
        week_end = false; 
    } else { 
        week_end = true; 
    }

    switch (week_end) {
        case true:
            console.log("Weekend");
            break;
        case false:
            console.log("Weekday");
            break;
    }
    i++;
}