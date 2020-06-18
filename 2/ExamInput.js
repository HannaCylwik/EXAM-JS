const board = [
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "1", "0", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "Y", "0", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "Y", "0", "0", "0", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "Y", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "X", "0", "0", "0", "0", "Y", "0", "X"],
  ["X", "0", "0", "X", "X", "X", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "X", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "Y", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
];

let startPosition = {
  x: Number,
  y: Number,
  vert: "",
  hor: "",
  nr: Number,
};

const find1 = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "1") {
        return [i, j];
      }
    }
  }
};

const setDirection = (board, ball, x, y) => {
  if (
    board[x - 1][y - 1] === "X" &&
    board[x][y - 1] === "X" &&
    board[x - 1][y] === "X"
  ) {
    ball.vert = "down";
    ball.hor = "right";
    ball.nr = 2;
  } else if (
    board[x - 1][y] === "X" &&
    board[x - 1][y + 1] === "X" &&
    board[x][y + 1] === "X"
  ) {
    ball.vert = "down";
    ball.hor = "left";
    ball.nr = 1;
  } else if (
    board[x][y - 1] === "X" &&
    board[x + 1][y - 1] === "X" &&
    board[x + 1][y] === "X"
  ) {
    ball.vert = "up";
    ball.hor = "right";
    ball.nr = 1;
  } else if (
    board[x + 1][y] === "X" &&
    board[x + 1][y + 1] === "X" &&
    board[x][y + 1] === "X"
  ) {
    ball.vert = "up";
    ball.hor = "left";
    ball.nr = 2;
  } else if (
    ball.vert === "up" &&
    ball.hor === "right" &&
    board[x - 1][y + 1] === "X" &&
    board[x - 1][y + 2] === "X" &&
    board[x - 1][y + 3] === "X"
  ) {
    ball.vert = "down";
    ball.hor = "left";
    ball.nr = 1;
  }
};

setPosition = (board, ball, findFunc, directionFunc) => {
  let position = findFunc(board);
  startPosition.x = position[0];
  startPosition.y = position[1];
  directionFunc(board, ball, position[0], position[1]);
};

setPosition(board, startPosition, find1, setDirection);

module.exports = {
  board: board,
  startPosition,
  setDirection,
};
