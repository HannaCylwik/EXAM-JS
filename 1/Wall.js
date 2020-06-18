const direction = require("./Direction");
const changeDir = direction.changeDir;

const whichWall = (board, ball) => {
  let storeX = [];
  for (let i = 0; i < 3; i++) {
    if (board[i][ball.y + 1] === "X") {
      storeX.push(board[i][ball.y + 1]);
    } else if (board[i][ball.y - 1] === "X") {
      storeX.push(board[i][ball.y - 1]);
    }
  }
  if (storeX.length < 2) {
    switch (ball.hor === "right") {
      case true:
        switch (ball.vert === "up") {
          case true:
            storeX = [];
            ball.vert = "down";
            ball.hor = "right";
            break;
          case false:
            storeX = [];
            ball.vert = "up";
            ball.hor = "right";
            break;
        }
        break;
      case false:
        switch (ball.vert === "up") {
          case true:
            storeX = [];
            ball.vert = "down";
            ball.hor = "left";
            break;
          case false:
            storeX = [];
            ball.vert = "up";
            ball.hor = "left";
            break;
        }
    }
  } else {
    switch (ball.vert === "up") {
      case true:
        switch (ball.hor === "right") {
          case true:
            storeX = [];
            ball.vert = "up";
            ball.hor = "left";
            break;
          case false:
            storeX = [];
            ball.vert = "up";
            ball.hor = "right";
            break;
        }
        break;
      case false:
        switch (ball.hor === "right") {
          case true:
            storeX = [];
            ball.vert = "down";
            ball.hor = "left";
            break;
          case false:
            storeX = [];
            ball.vert = "down";
            ball.hor = "right";
            break;
        }
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
            changeDir(ball, board);
          }
          break;
        case false:
          if (board[ball.x + 1][ball.y - 1] === "X") {
            whichWall(board, ball);
            changeDir(ball, board);
          }
          break;
      }
      break;
    case false:
      switch (ball.hor === "right") {
        case true:
          if (board[ball.x - 1][ball.y + 1] === "X") {
            whichWall(board, ball);
            changeDir(ball, board);
          }
          break;
        case false:
          if (board[ball.x - 1][ball.y - 1] === "X") {
            whichWall(board, ball);
            changeDir(ball, board);
          }
      }
  }
};

module.exports = {
  ifWall,
};
