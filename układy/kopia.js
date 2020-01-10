// const pokerCards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]; // tablica zawierająca wszystkie wartości
// const colors = ["heart", "spade", "diamond", "club"] // tablica zawierająca kolory
// const pokerSet = []; // tablica zawierająca wszystkie karty

// const pokerSetMaking = (poker, colors, table) => {
//     for (let s = 0; s < colors.length; s++) {
//         for (let i = 0; i < poker.length; i++) {
//             let allCards = poker[i]
//             table.push({ color: colors[s], value: allCards, weight: 2 + i })
//         }
//     }
// } // funkcja tworząca wszystkie 52 karty o 4 kolorach i 13 wartościach
// pokerSetMaking(pokerCards, colors, pokerSet) // wywołanie funkcji tworzącej 52 karty


// // const doublePokerSet = [...pokerSet]; // druga tablica o 52 kartach, z której będzie można usuwać już wybrane karty

// // let yourSet = []; // tablica, która zawiera wylosowane karty

// // const randomCards = (set, ySet) => {
// //     for (let i = 0; i < 5; i++) {
// //         let addCard = set[Math.floor(Math.random() * (set.length))];
// //         ySet.push(addCard);
// //         set.splice(set.indexOf(addCard), 1);
// //     }
// // } // funkcja losująca karty 

// // randomCards(doublePokerSet, yourSet); // wywołanie funkcji losującej karty
// // console.log(yourSet[0], yourSet[1], yourSet[2], yourSet[3], yourSet[4])

// // const setWithoutDoubles = [] // tablica na karty bez dubli

// // yourSet.map((card) => {
// //     if (!setWithoutDoubles.includes(card.value)) {
// //         setWithoutDoubles.push(card.value)
// //     }
// //     // } else {
// //     //     setWithoutDoubles.push("noname")
// //     // };
// // }) // dodanie do setWithoutDoubles kart niezdublowanych

// // console.log(setWithoutDoubles)
// // // for (let i = 0; i < yourSet.length; i++) {
// // //     if (cardTable.indexOf(yourSet[i].value) == -1) {
// // //         cardTable.push(yourSet[i])
// // //     }
// // // }
// // const sorting = (table) => {
// //     table.sort((a, b) => {
// //         return a.weight - b.weight;
// //     });
// // }; // funkcja sortująca po wadze karty (waga = 2-14)
// let x = [];
// let a = [{ color: "spade", value: "10", weight: 10 }, { color: "spade", value: "10", weight: 10 }, { color: "spade", value: "J", weight: 11 }, { color: "spade", value: "J", weight: 11 }, { color: "spade", value: "4", weight: 4 }];
// let b = [{ color: "spade", value: "10", weight: 10 }, { color: "spade", value: "J", weight: 11 }, { color: "spade", value: "4", weight: 4 }];


// let diff = (tab1, tab2) => {
//     for (let i = 0; i < tab1.length; i++) {
//         if (tab1[i].value != tab2[i]) {
//             x.push(tab1[i])
//             // return tab1[i];
//         };
//     };
// }; // funkcja sprawdzająca różnicę pomiędzy dwoma tablicami (tablicą kart i tablicą kart bez dubli) i ją zwracająca
// // diff(a, b)
// let difference = diff(a, b);
// console.log(x[0], x[1])
// // let difference = diff(yourSet, setWithoutDoubles);
// // console.log(difference);
// console.log(difference);

// let func = (table) => {
//     switch (table.length) {
//         case 4:
//             console.log("Masz parę", difference.value)
//             break;
//         case 3:
//             console.log("masz trójkę", difference.value)
//             break;
//         case 5:
//             console.log("masz wysoką kartę", table[0], table[1], table[2], table[3], table[4]);
//             break;
//     };
// };

// func(b)

// let func = (table) => {
//     switch (table.length) {
//         case 4:
//             console.log("Masz parę", difference.value, difference.color)
//             break;
//         case 3:
//             console.log("masz trójkę", difference.value, difference.color)
//             break;
//         case 5:
//             console.log("masz wysoką kartę", table[0], table[1], table[2], table[3], table[4])
//     }
// }

// func(setWithoutDoubles)
// // console.log(setWithoutDoubles[0], setWithoutDoubles[1], setWithoutDoubles[2], setWithoutDoubles[3], setWithoutDoubles[4])
// // const onePair = (playerSet) =>{

// // }




///////////////////////
const pokerCards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]; // tablica zawierająca wszystkie wartości
const colors = ["heart", "spade", "diamond", "club"] // tablica zawierająca kolory
const pokerSet = []; // tablica zawierająca wszystkie karty

const pokerSetMaking = (poker, colors, table) => {
    for (let s = 0; s < colors.length; s++) {
        for (let i = 0; i < poker.length; i++) {
            let allCards = poker[i]
            table.push({ color: colors[s], value: allCards, weight: 2 + i })
        }
    }
} // funkcja tworząca wszystkie 52 karty o 4 kolorach i 13 wartościach
pokerSetMaking(pokerCards, colors, pokerSet) // wywołanie funkcji tworzącej 52 karty


const doublePokerSet = [...pokerSet]; // druga tablica o 52 kartach, z której będzie można usuwać już wybrane karty

let yourSet = []; // tablica, która zawiera wylosowane karty

const randomCards = (set, ySet) => {
    for (let i = 0; i < 5; i++) {
        let addCard = set[Math.floor(Math.random() * (set.length))];
        ySet.push(addCard);
        set.splice(set.indexOf(addCard), 1);
    }
} // funkcja losująca karty 

randomCards(doublePokerSet, yourSet); // wywołanie funkcji losującej karty
console.log(yourSet[0], yourSet[1], yourSet[2], yourSet[3], yourSet[4])

const setWithoutDoubles = []; // tablica na karty bez dubli
const difference = []; // tablica na duble kart

yourSet.map((card) => {
    if (!setWithoutDoubles.includes(card.value)) {
        setWithoutDoubles.push(card.value)
    } else {
        if (difference[0] == card.value) {
        } else {
            difference.push(card.value);
        }
    }
}); // dodanie do setWithoutDoubles kart niezdublowanych i do difference dubli

console.log(setWithoutDoubles);
console.log(difference)

const sorting = (table) => {
    table.sort((a, b) => {
        return a.weight - b.weight;
    });
}; // funkcja sortująca po wadze karty (waga = 2-14)

// let aBezDubli = ["K", "J", "9"];
// let duble = ["2"];

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
        case 5:
            console.log("Masz wysoką kartę")
            //table[0], table[1], table[2], table[3], table[4]);
            break;
    };
}

func(setWithoutDoubles, difference);