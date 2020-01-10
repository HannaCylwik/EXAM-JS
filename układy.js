// --------- Aby sprawdzić, czy działa, należy zrobić następujące:

// NALEŻY TAKŻE USUNĄĆ W "ZADANIE2.JS" WSZYSTKIE "value" Z "difference.value", bo w difference są przechowywane tylko value

// 0. ZAKOMENTOWAĆ WSZYSTKO POWYŻEJ "isStrit"
// 1. Zmienić yourSet na dany układ
// 2. Zadeklarować let a na dany układ
// 3. Zadeklarować difference na dany układ
// 4. Wywołać funkcję func(a, difference)

// POKER KRÓLEWSKI
let yourSet = [{ value: "10", color: "heart", weight: 10 }, { value: "J", color: "heart", weight: 11 }, { value: "Q", color: "heart", weight: 12 }, { value: "K", color: "heart", weight: 13 }, { value: "A", color: "heart", weight: 14 }];

let a = [{ value: "10", color: "heart", weight: 10 }, { value: "J", color: "heart", weight: 11 }, { value: "Q", color: "heart", weight: 12 }, { value: "K", color: "heart", weight: 13 }, { value: "A", color: "heart", weight: 14 }];

let difference = [];

// POKER
let yourSet = [{ value: "7", color: "heart", weight: 7 }, { value: "8", color: "heart", weight: 8 }, { value: "9", color: "heart", weight: 9 }, { value: "10", color: "heart", weight: 10 }, { value: "J", color: "heart", weight: 11 }]

let a = [{ value: "7", color: "heart", weight: 7 }, { value: "8", color: "heart", weight: 8 }, { value: "9", color: "heart", weight: 9 }, { value: "10", color: "heart", weight: 10 }, { value: "J", color: "heart", weight: 11 }]

let difference = [];

// WYSOKA KARTA
let yourSet = [{ value: "6", color: "heart", weight: 6 }, { value: "8", color: "spade", weight: 8 }, { value: "2", color: "diamond", weight: 2 }, { value: "K", color: "club", weight: 13 }, { value: "4", color: "heart", weight: 4 }]

let a = [{ value: "6", color: "heart", weight: 6 }, { value: "8", color: "spade", weight: 8 }, { value: "2", color: "diamond", weight: 2 }, { value: "K", color: "club", weight: 13 }, { value: "4", color: "heart", weight: 4 }]

let difference = [];

// PARA
let yourSet = [{ value: "6", color: "heart", weight: 6 }, { value: "6", color: "spade", weight: 6 }, { value: "2", color: "diamond", weight: 2 }, { value: "K", color: "club", weight: 13 }, { value: "4", color: "heart", weight: 4 }]

let a = [{ value: "6", color: "heart", weight: 6 }, { value: "2", color: "diamond", weight: 2 }, { value: "K", color: "club", weight: 13 }, { value: "4", color: "heart", weight: 4 }]

let difference = [{ value: "6", color: "spade", weight: 6 }];

// TRÓJKA
let yourSet = [{ value: "6", color: "heart", weight: 6 }, { value: "6", color: "spade", weight: 6 }, { value: "6", color: "diamond", weight: 6 }, { value: "K", color: "club", weight: 13 }, { value: "4", color: "heart", weight: 4 }]

let a = [{ value: "6", color: "heart", weight: 6 }, { value: "K", color: "club", weight: 13 }, { value: "4", color: "heart", weight: 4 }]

let difference = [{ value: "6", color: "spade", weight: 6 }];

// DWIE PARY
let yourSet = [{ value: "6", color: "heart", weight: 6 }, { value: "6", color: "spade", weight: 6 }, { value: "K", color: "diamond", weight: 13 }, { value: "K", color: "club", weight: 13 }, { value: "4", color: "heart", weight: 4 }]

let a = [{ value: "6", color: "heart", weight: 6 }, { value: "K", color: "club", weight: 13 }, { value: "4", color: "heart", weight: 4 }]

let difference = [{ value: "6", color: "spade", weight: 6 }, { value: "K", color: "diamond", weight: 13 }];

// FULL
let yourSet = [{ value: "6", color: "heart", weight: 6 }, { value: "6", color: "spade", weight: 6 }, { value: "K", color: "diamond", weight: 13 }, { value: "K", color: "club", weight: 13 }, { value: "6", color: "club", weight: 4 }]

let a = [{ value: "6", color: "heart", weight: 6 }, { value: "K", color: "club", weight: 13 }]

let difference = [{ value: "6", color: "spade", weight: 6 }, { value: "K", color: "diamond", weight: 13 }];

// STRIT
let yourSet = [{ value: "6", color: "heart", weight: 6 }, { value: "8", color: "spade", weight: 8 }, { value: "7", color: "diamond", weight: 7 }, { value: "9", color: "club", weight: 9 }, { value: "10", color: "heart", weight: 10 }]

let a = [{ value: "6", color: "heart", weight: 6 }, { value: "8", color: "spade", weight: 8 }, { value: "7", color: "diamond", weight: 7 }, { value: "9", color: "club", weight: 9 }, { value: "10", color: "heart", weight: 10 }]

let difference = [];

// KOLOR
let yourSet = [{ value: "6", color: "heart", weight: 6 }, { value: "8", color: "heart", weight: 8 }, { value: "2", color: "heart", weight: 2 }, { value: "K", color: "heart", weight: 13 }, { value: "4", color: "heart", weight: 4 }]

let a = [{ value: "6", color: "heart", weight: 6 }, { value: "8", color: "heart", weight: 8 }, { value: "2", color: "heart", weight: 2 }, { value: "K", color: "heart", weight: 13 }, { value: "4", color: "heart", weight: 4 }]

let difference = [];

// KARETA
let yourSet = [{ value: "6", color: "heart", weight: 6 }, { value: "6", color: "spade", weight: 6 }, { value: "6", color: "diamond", weight: 6 }, { value: "6", color: "club", weight: 6 }, { value: "10", color: "heart", weight: 10 }]

let a = [{ value: "6", color: "heart", weight: 6 }, { value: "10", color: "heart", weight: 10 }]

let difference = [{ value: "6", color: "spade", weight: 6 }];