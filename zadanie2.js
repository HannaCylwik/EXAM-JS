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
        setWithoutDoubles.push(card.value);
    } else {
        if (difference[0] === card.value) {
        } else {
            difference.push(card.value);
        };
    };
}
);
// dodanie do setWithoutDoubles kart niezdublowanych i do difference dubli

console.log(setWithoutDoubles);
console.log(difference);

let ifStrit = []; // tablica do przechowywania różnicy między wagami kart
const strit = (set, withoutD) => {
    set.sort((a, b) => {
        return a.weight - b.weight; // posortowanie tablicy
    });
    set.forEach((val, i, array) => {
        if (i === 4) {
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
                    console.log(`Masz parę ${difference[0]}`)
                    break;
            } break;
        case 3:
            switch (table2.length) {
                case 1:
                    console.log(`Masz trójkę złożoną z ${difference[0]}`);
                    break;
                case 2:
                    console.log(`Masz dwie pary - jedną złożoną z ${difference[0]} i drugą z ${difference[1]}`);
                    break;
            } break;
        case 2:
            switch (table2.length) {
                case 1:
                    console.log(`Masz karetę z ${difference}`);
                    break;
                case 2:
                    console.log(`Masz fula złożonego z ${difference[0]} i ${difference[1]}`);
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
                        case (ifStrit.length === 4):
                            console.log("Masz strita");
                            break;
                    } break;
                case true:
                    switch (true) {
                        case (ifStrit.length < 4):
                            console.log("Masz kolor");
                            break;
                        case (ifStrit[0].weight === 10):
                            console.log("Masz poker królewski");
                            break;
                        case (ifStrit[0].weight < 10):
                            console.log("Masz pokera");
                            break;
                    } break;
            };
        // console.log("Masz wysoką kartę")
        // //table[0], table[1], table[2], table[3], table[4]);
        // break;
    };
};

func(setWithoutDoubles, difference);