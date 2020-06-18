const bounce = require("./ExamInput");
const wall = require("./Wall");

const startPosition = bounce.startPosition;
const ifWall = wall.ifWall;

class Ball {
  constructor(position) {
    this.position = position;
    this.x = position.x;
    this.y = position.y;
    this.vert = position.vert;
    this.hor = position.hor;
  }

  moveUp = () => {
    this.x--;
  };
  moveDown = () => {
    this.x++;
  };
  moveRight = () => {
    this.y++;
  };
  moveLeft = () => {
    this.y--;
  };
}

const whereToBounce = (ball, board) => {
  switch (ball.hor === "right") {
    case true:
      switch (ball.vert === "down") {
        case true:
          board[ball.x][ball.y] = 0;
          ball.moveRight();
          ball.moveDown();
          console.log(ball.x, ball.y);
          ball.vert = "down";
          ball.hor = "right";
          board[ball.x][ball.y] = 1;
          break;
        case false:
          board[ball.x][ball.y] = 0;
          ball.moveRight();
          ball.moveUp();
          console.log(ball.x, ball.y);
          ball.vert = "up";
          ball.hor = "right";
          board[ball.x][ball.y] = 1;
          break;
      }
      break;
    case false:
      switch (ball.vert === "down") {
        case true:
          board[ball.x][ball.y] = 0;
          ball.moveLeft();
          ball.moveDown();
          console.log(ball.x, ball.y);
          ball.vert = "down";
          ball.hor = "left";
          board[ball.x][ball.y] = 1;
          break;
        case false:
          board[ball.x][ball.y] = 0;
          ball.moveLeft();
          ball.moveUp();
          console.log(ball.x, ball.y);
          ball.vert = "up";
          ball.hor = "left";
          board[ball.x][ball.y] = 1;
          break;
      }
  }
};

const moveBall = (ball, board) => {
  let nowPosition = [0, 0];
  let compare = false;
  let position = [-2, -2];
  do {
    whereToBounce(ball, board);
    ifWall(board, ball);
    nowPosition = [ball.x, ball.y];
    position = [startPosition.x, startPosition.y];
    compare =
      nowPosition.length === position.length &&
      nowPosition.every((value, index) => value === position[index]);
  } while (!compare);
};

const Ping = new Ball(startPosition);

module.exports = {
  Ping,
  moveBall,
};
