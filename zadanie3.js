let sudokuTable = [
    [7, 0, 4, 8, 0, 0, 3, 0, 1],
    [8, 2, 0, 5, 0, 0, 0, 4, 0],
    [0, 0, 9, 4, 3, 0, 5, 0, 0],
    [3, 1, 0, 0, 0, 0, 8, 0, 7],
    [0, 8, 0, 0, 0, 0, 0, 1, 0],
    [9, 0, 7, 0, 0, 0, 0, 3, 2],
    [0, 0, 6, 0, 1, 5, 4, 0, 0],
    [0, 7, 0, 0, 0, 9, 0, 6, 5],
    [5, 0, 8, 0, 0, 2, 1, 0, 3]
];


const sudokuFunction = (table) => {
    let hasAlreadyBeen = [];
    for (let col = 0; col < table.length; col++) {
        for (let row = 0; row < table.length; row++) {
            switch (table[col][row]) {
                case 0:
                    for (let i = 0; i < 9; i++) {
                        if (table[col][i] > 0) {
                            hasAlreadyBeen.push(table[col][i]);
                            console.log(hasAlreadyBeen)
                        };
                        for (let j = 0; j < 9; j++) {
                            if (table[row][j] > 0) {
                                hasAlreadyBeen.push(table[row][j]);
                                console.log(hasAlreadyBeen);
                            };
                            for (let squareCol = Math.floor(col / 3) * 3; squareCol < Math.floor(col / 3) * 3 + 3; squareCol++) {
                                for (let squareRow = Math.floor(row / 3) * 3; squareRow < Math.floor(row / 3) * 3 + 3; squareRow++) {
                                    if (table[squareCol][squareCol] > 0) {
                                        hasAlreadyBeen.push(table[squareCol][squareCol])
                                    };
                                };
                            };
                        };
                    };
                    console.log(hasAlreadyBeen)
                    break;
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    break;
            };
        };
    };
    // console.log(hasAlreadyBeen)
};

sudokuFunction(sudokuTable)