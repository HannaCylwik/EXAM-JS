let arr = [{ color: "spade", value: 6, weight: 6 }, { color: "heart", value: 6, weight: 6 }, { color: "spade", value: 3, weight: 3 }, { color: "heart", value: 4, weight: 4 }, { color: "club", value: 5, weight: 5 }];

let a = arr.includes(arr[0].value)
console.log(a)
console.log(arr[0].value)

let ifPair = [];

const pair = () => {
    arr.map((card) => {
        if (!ifPair.includes(card.value)) {
            ifPair.push(card.value)
        };
    });
};

pair();
console.log(ifPair[0], ifPair[1], ifPair[2], ifPair[3], ifPair[4]);