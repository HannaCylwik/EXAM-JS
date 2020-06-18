const changeDir = (ball, board) => {
  if (ball.x === 1 && ball.y === 1) {
    ball.vert = "down";
    ball.hor = "right";
  } else if (ball.x === 1 && ball.y === board[0].length - 2) {
    ball.vert = "down";
    ball.hor = "left";
  } else if (ball.x === board.length - 2 && ball.y === 1) {
    ball.vert = "up";
    ball.hor = "right";
  } else if (ball.x === board.length - 2 && ball.y === board[0].length - 2) {
    ball.vert = "up";
    ball.hor = "left";
  }
};

module.exports = {
  changeDir,
};
