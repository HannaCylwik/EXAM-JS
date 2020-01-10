let arr = [{ color: "spade", value: 1 }, { color: "spade", value: 4 }, { color: "spade", value: 7 }, { color: "spade", value: 10 }, { color: "spade", value: 2 }]

// let a = arr.filter((card, i, array) => {

// return array[i].color == "spade";
// }
// )

let a = arr.every((val, i, array) => {
    return array[0].color === array[i].color;
}) // sprawdzenie, czy wszystkie karty są tego samego koloru / zwraca true or false

console.log(a);

let checkYourSet = table => { // sprawdza, jaki układ kart ma gracz
    switch (table) {
        case true: // kiedy wszystkie karty mają ten sam kolor
            console.log("Masz kolor");
            break;
    }
};

checkYourSet(a); // wywołanie 