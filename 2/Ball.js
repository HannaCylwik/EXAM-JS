const bounce = require("./ExamInput");
const wall = require("./Wall");

const startPosition = bounce.startPosition;
const ifWall = wall.ifWall;
const ifY = wall.ifY;

class Ball {
  constructor(position) {
    this.position = position;
    this.x = position.x;
    this.y = position.y;
    this.vert = position.vert;
    this.hor = position.hor;
    this.nr = position.nr;
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

const forRandomY = {
  directions: [
    { vert: "up", hor: "right", nr: 1 },
    { vert: "down", hor: "left", nr: 1 },
    { vert: "up", hor: "left", nr: 2 },
    { vert: "down", hor: "right", nr: 2 },
  ],
  random: (dir) => dir[Math.floor(Math.random() * dir.length)],
};

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
  let nowPosition = [];
  let compare = 0;
  do {
    ifWall(board, ball);
    whereToBounce(ball, board);
    ifY(ball, board, forRandomY.random, forRandomY.directions);
    nowPosition = [ball.x, ball.y];
    position = [startPosition.x, startPosition.y];
    compare++;
  } while (compare !== 50);
};

const Ping = new Ball(startPosition);

module.exports = {
  Ping,
  moveBall,
};
