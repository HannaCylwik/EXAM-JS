let arr = [{ color: "spade", value: 6, weight: 6 }, { color: "spade", value: 2, weight: 2 }, { color: "spade", value: 3, weight: 3 }, { color: "spade", value: 4, weight: 4 }, { color: "spade", value: 5, weight: 5 }];


let ifStrit = [];

const strit = () => {
    arr.sort((a, b) => {
        return a.weight - b.weight;
    });
    arr.forEach((val, i, array) => {
        if (i == 4) {
            console.log("już");
        } else if (array[i + 1].weight - array[i].weight == 1) {
            ifStrit.push(val);
        }
    });
    let a = arr.every((val, i, array) => {
        return array[0].color === array[i].color;
    });
    ifStrit.push({ boolean: a });
};
strit();
// console.log(ifStrit[4], ifStrit[4].boolean);


let checkYourSet = table => { // sprawdza, jaki układ kart ma gracz
    switch (table.length, table[4].boolean) {
        case (5, false):
            console.log("Masz strita");
            break;
        case (5, true):
            console.log("Masz pokera");
            break;

    }
};

checkYourSet(ifStrit); // wywołanie 