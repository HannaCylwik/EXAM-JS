const ballBoard = require("./ExamInput");
const direction = ballBoard.setDirection;

const ifEveryX = (el) => el === "X";
const whichWall = (board, ball) => {
  switch (board[ball.x + 1].every(ifEveryX)) {
    case true:
      switch (ball.hor === "right") {
        case true:
          switch (ball.vert === "down") {
            case true:
              ball.hor = "right";
              ball.vert = "up";
              ball.nr = 1;
              break;
            case false:
              ball.hor = "right";
              ball.vert = "down";
              ball.nr = 2;
              break;
          }
          break;
        case false:
          switch (ball.vert === "down") {
            case true:
              ball.hor = "left";
              ball.vert = "up";
              ball.nr = 2;
              break;
            case false:
              ball.hor = "left";
              ball.vert = "down";
              ball.nr = 1;
              break;
          }
          break;
      }
      break;
    case false:
      switch (ball.hor === "right") {
        case true:
          switch (ball.vert === "down") {
            case true:
              ball.hor = "left";
              ball.vert = "down";
              ball.nr = 1;
              break;
            case false:
              ball.hor = "left";
              ball.vert = "up";
              ball.nr = 2;
              break;
          }
          break;
        case false:
          switch (ball.vert === "down") {
            case true:
              ball.hor = "right";
              ball.vert = "down";
              ball.nr = 2;
              break;
            case false:
              ball.hor = "right";
              ball.vert = "up";
              ball.nr = 1;
              break;
          }
          break;
      }
  }
};

const ifWall = (board, ball) => {
  switch (ball.vert === "down") {
    case true:
      switch (ball.hor === "right") {
        case true:
          if (board[ball.x + 1][ball.y + 1] === "X") {
            whichWall(board, ball);
            direction(board, ball, ball.x, ball.y);
            return true;
          }
          break;
        case false:
          if (board[ball.x + 1][ball.y - 1] === "X") {
            whichWall(board, ball);
            direction(board, ball, ball.x, ball.y);
            return true;
          }
          break;
      }
      break;
    case false:
      switch (ball.hor === "right") {
        case true:
          if (board[ball.x - 1][ball.y + 1] === "X") {
            whichWall(board, ball);
            direction(board, ball, ball.x, ball.y);
            return true;
          }
          break;
        case false:
          if (board[ball.x - 1][ball.y - 1] === "X") {
            whichWall(board, ball);
            direction(board, ball, ball.x, ball.y);
            return true;
          }
          break;
      }
  }
};

const forY = (randomFunc, dir, ball) => {
  let randomDirection = randomFunc(dir);
  if (ball.nr === randomDirection.nr) {
    let newDir = dir.filter((e) => e.nr != randomDirection.nr);
    let newRandomDirection = randomFunc(newDir);
    ball.vert = newRandomDirection.vert;
    ball.hor = newRandomDirection.hor;
  } else {
    ball.vert = randomDirection.vert;
    ball.hor = randomDirection.hor;
  }
};

const ifTrue = (randomFunc, dir, board, ball) => {
  let trueWall;
  do {
    forY(randomFunc, dir, ball);
    trueWall = ifWall(board, ball);
  } while (trueWall === true);
};

const ifY = (ball, board, randomFunc, dir) => {
  if (board[ball.x + 1][ball.y + 1] === "Y") {
    forY(randomFunc, dir, ball);
    board[ball.x + 1][ball.y + 1] = "0";
    ifTrue(randomFunc, dir, board, ball);
  } else if (board[ball.x - 1][ball.y - 1] === "Y") {
    forY(randomFunc, dir, ball);
    board[ball.x - 1][ball.y - 1] = "0";
    ifTrue(randomFunc, dir, board, ball);
  } else if (board[ball.x - 1][ball.y + 1] === "Y") {
    forY(randomFunc, dir, ball);
    board[ball.x - 1][ball.y + 1] = "0";
    ifTrue(randomFunc, dir, board, ball);
  } else if (board[ball.x + 1][ball.y - 1] === "Y") {
    forY(randomFunc, dir, ball);
    board[ball.x + 1][ball.y - 1] = "0";
    ifTrue(randomFunc, dir, board, ball);
  }
};

module.exports = {
  ifWall,
  ifY,
};
