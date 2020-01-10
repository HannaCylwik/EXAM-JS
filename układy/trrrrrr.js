// let t = [1, 2, 3, 4]

// console.log(t.includes((1, 2, 3)))




// if (poker.length === 5) {
//     poker.every((val, i, arr) => {
//         return arr[0].color === arr[i].color;
//     });
//     switch (pok) {
//         case true:
//             poker.forEach((val, i, arr) => {
//                 if (!withoutDoubles.includes(arr[i].value)) {
//                     withoutDoubles.push(val.value);
//                 };
//             });
//         case false:
//     }


// }

// let x = [1, 2];
// let y = [3, 4, 5];

// let func = (table, v) => {
//     switch (table.length, v.length) {
//         // case 3:
//         //     console.log("ok");
//         //     break;
//         // case 2:
//         //     console.log("ok");
//         //     break;
//         case (2, 3):
//             console.log("ok");
//     }
// }

// func(x, y)



// let a = [{ color: "spade", value: "10", weight: 10 }, { color: "heart", value: "10", weight: 10 }, { color: "spade", value: "10", weight: 10 }, { color: "spade", value: "2", weight: 2 }, { color: "spade", value: "4", weight: 4 }];
// let b = [{ color: "spade", value: "10", weight: 10 }, { color: "spade", value: "2", weight: 2 }, { color: "spade", value: "4", weight: 4 }];

// let a = [{ color: "spade", value: "K", weight: 13 }, { color: "club", value: "J", weight: 11 }, { color: "diamond", value: "9", weight: 9 }, { color: "heart", value: "9", weight: 9 }, { color: "club", value: "K", weight: 13 }]

// let aBezDubli = ["K", "J", "9"]
// let duble = ["2", "K"]

// let func = (table1, table2) => {
//     switch (table1.length) {
//         case 4:
//             switch (table2.length) {
//                 case 1:
//                     console.log(`Masz parę ${duble}`)
//                     break;
//             };
//         case 3:
//             switch (table2.length) {
//                 case 1:
//                     console.log(`Masz trójkę ${duble}`);
//                     break;
//                 case 2:
//                     console.log(`Masz dwie pary ${duble}`);
//                     break;
//             }break;
//         // case (3 & 2):
//         //     console.log(`Masz dwie pary ${duble}`);
//         //     break;
//         case 5:
//             console.log("Masz wysoką kartę")
//             //table[0], table[1], table[2], table[3], table[4]);
//             break;
//     };
// };

// func(aBezDubli, duble)

// console.log(5, 0)
// console.log(4, 1)
// console.log(3, 1)
// console.log(3, 2)
// console.log(2, 2)


/////////////////////////
let yourSet = [{ value: "7", color: "heart", weight: 7 }, { value: "8", color: "heart", weight: 8 }, { value: "9", color: "heart", weight: 9 }, { value: "10", color: "heart", weight: 10 }, { value: "J", color: "heart", weight: 11 }]

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
    console.log(withoutD, ifStrit[0]);
    // sprawdzenie, czy karty mają taki sam kolor
};
// strit(yourSet, setWithoutDoubles);

let difference = []

// const sorting = (table) => {
//     table.sort((a, b) => {
//         return a.weight - b.weight;
//     });
// }; // funkcja sortująca po wadze karty (waga = 2-14)

// let a = [{ color: "spade", value: "10", weight: 10 }, { color: "spade", value: "10", weight: 10 }, { color: "spade", value: "10", weight: 10 }, { color: "spade", value: "2", weight: 2 }, { color: "spade", value: "4", weight: 4 }];
// let b = [{ color: "spade", value: "10", weight: 10 }, { color: "spade", value: "2", weight: 2 }, { color: "spade", value: "4", weight: 4 }];


// let diff = (tab1, tab2) => {
//     for (let i = 0; i < tab1.length; i++) {
//         if (tab1[i].value != tab2[i]) {
//             return tab1[i];
//         };
//     };
// }; // funkcja sprawdzająca różnicę pomiędzy dwoma tablicami (tablicą kart i tablicą kart bez dubli) i ją zwracająca
// // let difference = diff(a, b);
// // console.log(difference);
// let difference = diff(yourSet, setWithoutDoubles);
// console.log(difference);


let func = (table1, table2) => {
    switch (table1.length) {
        case 4:
            switch (table2.length) {
                case 1:
                    console.log(`Masz parę ${difference}`)
                    break;
            } break;
        case 3:
            switch (table2.length) {
                case 1:
                    console.log(`Masz trójkę ${difference}`);
                    break;
                case 2:
                    console.log(`Masz dwie pary ${difference}`);
                    break;
            } break;
        case 2:
            switch (table2.length) {
                case 3:
                    console.log(`Masz fula - trójkę złożoną z : ${difference[0] > difference[1] ? difference[0] : difference[1]} i parę z : ${difference[0] < difference[1] ? difference[0] : difference[1]}`);
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
                        case (ifStrit.length = 4):
                            console.log("Masz strita");
                            break;
                    } break;
                case true:
                    switch (true) {
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
let a = [{ value: "7", color: "heart", weight: 7 }, { value: "8", color: "heart", weight: 8 }, { value: "9", color: "heart", weight: 9 }, { value: "10", color: "heart", weight: 10 }, { value: "J", color: "heart", weight: 11 }]


func(a, difference);