// const pokerCards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]; // tablica zawierająca wszystkie wartości
// const colors = ["heart", "spade", "diamond", "club"] // tablica zawierająca kolory
// const pokerSet = []; // tablica zawierająca wszystkie karty

// const pokerSetMaking = (poker, colors, table) => {
//     for (let s = 0; s < colors.length; s++) {
//         for (let i = 0; i < poker.length; i++) {
//             let allCards = poker[i]
//             table.push({ color: colors[s], value: allCards })
//         }
//     }
// } // funkcja tworząca wszystkie 52 karty o 4 kolorach i 13 wartościach
// pokerSetMaking(pokerCards, colors, pokerSet) // wywołanie funkcji tworzącej 52 karty

// const doublePokerSet = [...pokerSet]; // druga tablica o 52 kartach, z której będzie można usuwać już wybrane karty

// let yourSet = []; // tablica, która zawiera wylosowane karty

// const randomCards = (set, ySet) => {
//     for (let i = 0; i < 5; i++) {
//         let addCard = set[Math.floor(Math.random() * (set.length))];
//         ySet.push(addCard);
//         set.splice(set.indexOf(addCard), 1);
//     }
// } // funkcja losująca karty 

// randomCards(doublePokerSet, yourSet); // wywołanie funkcji losującej karty
// // console.log(yourSet[0], yourSet[1], yourSet[2], yourSet[3], yourSet[4])

// // let doubleYourSet = yourSet.map(card => card);

// const setWithoutDoubles = [] // tablica na karty bez dubli

// doubles = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (setWithoutDoubles.indexOf(arr[i].value == -1)) {
//             setWithoutDoubles.push(arr[i]);
//         };
//     };
// };
// // dodanie do setWithoutDoubles kart niezdublowanych
// doubles(yourSet);

// console.log(setWithoutDoubles)
// // for (let i = 0; i < yourSet.length; i++) {
// //     if (cardTable.indexOf(yourSet[i].value) == -1) {
// //         cardTable.push(yourSet[i])
// //     }
// // }


// let diff = function (tab1, tab2) {
// }





///////////
let a = [{ color: "spade", value: "10", weight: 10 }, { color: "spade", value: "10", weight: 10 }, { color: "spade", value: "10", weight: 10 }, { color: "spade", value: "2", weight: 2 }, { color: "spade", value: "4", weight: 4 }];
let b = [{ color: "spade", value: "10", weight: 10 }, { color: "spade", value: "2", weight: 2 }, { color: "spade", value: "4", weight: 4 }];
let difference = diff(a, b)

////////

// const sorting = (table) => {
//     table.sort((a, b) => {
//         return a.weight - b.weight;
//     });
// }; // funkcja sortująca po wadze karty (waga = 2-14)