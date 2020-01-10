// let array = [1, "1a", "1b", "1c", "1d"];
// //"1e", "1f", "1g"];
// let left = [];
// let right = [];
// let rest = [];
// let secondArr = [];

// if (sum1 > sum2) {
//   console.log("Cięższa kulka jest po prawej stronie wagi.");
//   return sum1;
// } else if (sum2 > sum1) {
//   console.log("Cięższa kulka jest po lewej stronie wagi.");
//   return sum2;
// } else {
//   ("Cięższa kulka jest w pozostałych kulkach.");
//   return sum3;
// }

// let arrayWithObjects = array.map(function(value, index) {
//   return {
//     value: value,
//     index: index
//   };
// });

// let sum = 0;
// function fff(rSide) {
//   sum += rSide.value;
// }

// let sum1 = arrayWithObjects.forEach(fff(arrayWithObjects));
// console.log(sum1);

let array = [1, 2, 3];

let right = rSide.forEach(function(rSide) {
  sum1 += rSide.value;
  return sum1;
});

function weightingOne(rSide) {
  let sum1 = 0;

  console.log(sum1);
}

// function dividingInScale(arr, side) {
//   let argument = arr[Math.floor(Math.random() * (arr.length - 1))];
//   side.push(argument);
//   arr.splice(arr.indexOf(argument));
// }

// dividingInScale(array, left);
// console.log(array, left);

// let arrayWithObjects = array.map(function(value, index) {
//   return {
//     value: value,
//     index: index
//   };
// });

// function scale(arr) {
//   for (let i = 0; i < 3; i++) {
//     let rSide = arr[Math.floor(Math.random() * (arr.length - 1))];
//     right.push(rSide);
//     arr.splice(rSide.index, 1);
//     console.log(
//       arrayWithObjects,
//       arrayWithObjects[0],
//       arrayWithObjects[1],
//       arrayWithObjects[2],
//       arrayWithObjects[3],
//       arrayWithObjects[4],
//       arrayWithObjects[5],
//       arrayWithObjects[6],
//       arrayWithObjects[7]
//     );
//   }
//   for (let i = 3; i < 6; i++) {
//     let lSide = arr[Math.floor(Math.random() * (arr.length - 1))];
//     left.push(lSide);
//     arr.splice(lSide.index, 1);
//     console.log(
//       arrayWithObjects,
//       arrayWithObjects[0],
//       arrayWithObjects[1],
//       arrayWithObjects[2],
//       arrayWithObjects[3],
//       arrayWithObjects[4],
//       arrayWithObjects[5],
//       arrayWithObjects[6],
//       arrayWithObjects[7]
//     );
//   }
//   //   for (let i = 6; i < 8; i++) {
//   //     let restV = arr[Math.floor(Math.random() * (arr.length - 1))];
//   //     rest.push(restV);
//   //     arr.splice(restV.index, 1);
//   //   }
// }

// scale(arrayWithObjects);
// console.log(
//   arrayWithObjects,
//   arrayWithObjects[1],
//   arrayWithObjects[2],
//   arrayWithObjects[3],
//   arrayWithObjects[4],
//   arrayWithObjects[5],
//   arrayWithObjects[6],
//   arrayWithObjects[7]
// );
// // console.log(right[0], right[1], right[2]);
// // console.log(left[0], left[1], left[2]);
// // console.log(rest[0], rest[1]);
// // console.log(arrayWithObjects);

// function dividingInScale(arr, side, i) {
//     let argument = arr[Math.floor(Math.random() * (arr.length - 1))];
//     if (argument.value > 0) {
//       side.push(argument);
//       arr.splice(argument.index, 1, 0);
//     } else {
//       i--;
//     }
//   }

// function scale(arr) {
//   for (let i = 0; i < 3; i++) {
//     let rSide = arr[Math.floor(Math.random() * (arr.length - 1))];
//     right.push(rSide);
//     arr.slice(rSide, 1);
//   }
// }

// function scaleOne(arr) {
//   for (let i = 0; i < 3; i++) {
//     let rSide = arr[Math.floor(Math.random() * (arr.length - 1))];
//     if (rSide.value > 0) {
//       right.push(rSide);
//       arr.splice(arr.indexOf(rSide), 1);
//     } else {
//       i--;
//     }
//   }
