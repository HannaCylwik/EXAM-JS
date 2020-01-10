let yourSet = [{ value: "6", color: "heart", weight: 6 }, { value: "6", color: "spade", weight: 6 }, { value: "6", color: "diamond", weight: 6 }, { value: "6", color: "club", weight: 6 }, { value: "10", color: "heart", weight: 10 }]

let a = [{ value: "6", color: "heart", weight: 6 }, { value: "10", color: "heart", weight: 10 }]

let difference = [{ value: "6", color: "spade", weight: 6 }];


let ifStrit = []; // tablica do przechowywania różnicy między wagami kart
const strit = (set, withoutD) => {
    set.sort((a, b) => {
        return a.weight - b.weight; // posortowanie tablicy
    });
    set.forEach((val, i, array) => {
        if (i == 4) {
            console.log("już");
        } else if (array[i + 1].weight - array[i].weight == 1) {
            ifStrit.push(val); // sprawdzenie, czy w tablicy są następujące po sobie wagi kart
        };
    });
    (() => {
        let a = set.every((val, i, array) => {
            return array[0].color === array[i].color
        });
        withoutD.push(a);
    })();
    console.log(withoutD, ifStrit.length);
    // sprawdzenie, czy karty mają taki sam kolor
};

let func = (table1, table2) => {
    switch (table1.length) {
        case 4:
            switch (table2.length) {
                case 1:
                    console.log(`Masz parę ${difference[0].value}`)
                    break;
            } break;
        case 3:
            switch (table2.length) {
                case 1:
                    console.log(`Masz trójkę złożoną z ${difference[0].value}`);
                    break;
                case 2:
                    console.log(`Masz dwie pary - jedną złożoną z ${difference[0].value} i drugą z ${difference[1].value}`);
                    break;
            } break;
        case 2:
            switch (table2.length) {
                case 1:
                    console.log(`Masz karetę z ${difference[0].value}`);
                    break;
                case 2:
                    console.log(`Masz fula złożonego z ${difference[0].value} i ${difference[1].value}`);
                    break;
            } break;
        case 5:
            strit(yourSet, table1) // wywołanie funkcji
            switch (table1[table1.length - 1]) {
                case false:
                    switch (true) {
                        case (ifStrit.length < 4):
                            console.log("Masz wysoką kartę");
                            break;
                        case (ifStrit.length == 4):
                            console.log("Masz strita");
                            break;
                    } break;
                case true:
                    switch (true) {
                        case (ifStrit.length < 4):
                            console.log("Masz kolor");
                            break;
                        case (ifStrit[0].weight == 10):
                            console.log("Masz poker królewski");
                            break;
                        case (ifStrit[0].weight < 10):
                            console.log("Masz pokera");
                            break;
                    } break;
            }
        // console.log("Masz wysoką kartę")
        // //table[0], table[1], table[2], table[3], table[4]);
        // break;
    };
}

func(a, difference);
