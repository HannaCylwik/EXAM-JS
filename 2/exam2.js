"use strict";

const bounce = require("./ExamInput");
const ball = require("./Ball");

const bounceBoard = bounce.board;
const Ping = ball.Ping;
const moveBall = ball.moveBall;

console.log("Bounce has started");
moveBall(Ping, bounceBoard);
console.log("Bounce has ended");
