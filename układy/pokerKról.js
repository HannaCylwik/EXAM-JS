let arr = [{ color: "spade", value: "10" }, { color: "spade", value: "J" }, { color: "spade", value: "K" }, { color: "spade", value: "Q" }, { color: "spade", value: "A" }];

let poker = []; // tablica zawierająca tylko wartości od 10
let withoutDoubles = []; // tablica na bazie tablicy poker, ale bez dubli
(() => {
    arr.forEach((val, i, array) => {
        switch (array[i].value) {
            case "10":
                poker.push(array[i]);
                break;
            case "J":
                poker.push(array[i]);
                break;
            case "Q":
                poker.push(array[i]);
                break;
            case "K":
                poker.push(array[i]);
                break;
            case "A":
                poker.push(array[i]);
                break;
        };
    });
    if (poker.length === 5) {
        let pok = poker.every((val, i, arr) => {
            return arr[0].color === arr[i].color;
        });
        switch (pok) {
            case true:
                poker.forEach((val, i, arr) => {
                    if (!withoutDoubles.includes(arr[i].value)) {
                        withoutDoubles.push(val.value);
                    };
                });
                break;
            case false:
                console.log("Not this time")
        }

        // poker.forEach((val, i, arr) => {
        //     if (!withoutDoubles.includes(arr[i].value)) {
        //         withoutDoubles.push(val.value);
        //     };
        // });
    }
})();


console.log(withoutDoubles[0], withoutDoubles[1], withoutDoubles[2], withoutDoubles[3], withoutDoubles[4])

let itsPoker = withoutDoubles.includes(("10", "J", "Q", "K", "A"));


let checkYourSet = table => { // sprawdza, jaki układ kart ma gracz
    switch (table) {
        case true: // kiedy karty to: 10, J, Q, K, A
            console.log("Masz poker królewski");
            break;
    }
};

checkYourSet(itsPoker); // wywołanie 
