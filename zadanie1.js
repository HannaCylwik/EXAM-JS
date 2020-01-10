// KOD OGÓLNY POTRZEBNY DO KOLEJNYCH ETAPÓW

let array = [1, 1, 1, 1, 1, 1, 1, 1];
let left = [];
let right = [];
let rest = [];
////////////////////
let secondArr = [];
let finalRight = [];
let finalLeft = [];

// kopia arraya z obiektami o value i index, z którego będą splice-owane obiekty do tablic left, right i rest
let arrayWithObjects = array.map(function (value, index) {
  return {
    value: value,
    index: index
  };
});

// funkcja do użycia w funkcji scaleOne - losuje randomowy obiekt i umieszcza go w tablicy
function dividingInScale(arr, side) {
  let argument = arr[Math.floor(Math.random() * (arr.length - 1))];
  if (argument) {
    side.push(argument);
    arr.splice(arr.indexOf(argument), 1);
  }
}

/////////////////////////////////////////////////////////////////////////////////
// PODZIAŁ

// funkcja do podziału obiektów z podanej tablicy na trzy inne tablice
function scale(arr, rSide, lSide, rest, functionForDividing) {
  for (let i = 0; i < 3; i++) {
    functionForDividing(arr, rSide);
  }
  for (let i = 3; i < 6; i++) {
    functionForDividing(arr, lSide);
  }
  for (let i = 6; i < 8; i++) {
    functionForDividing(arr, rest);
  }
}

//////////////////////////////////////////////////////////////////////////////////
// WAŻENIE 1

//funkcja do pierwszego ważenia

function weightingOne(rSide, lSide, rest) {
  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;

  rSide.forEach(function (rSide) {
    sum1 += rSide.value;
    return sum1;
  });
  console.log(sum1);

  lSide.forEach(function (lSide) {
    sum2 += lSide.value;
    return sum2;
  });
  console.log(sum2);

  rest.forEach(function (rest) {
    sum3 += rest.value;
    return sum3;
  });
  console.log(sum3);

  if (sum1 == sum2) {
    console.log("Cięższa kulka jest w pozostałych");
    return rest;
  } else {
    console.log(
      `Cięższa kulka jest po ${sum1 > sum2 ? "prawej" : "lewej"} stronie`
    );
    return sum1 > sum2 ? rSide : lSide;
  }
}

scale(arrayWithObjects, right, left, rest, dividingInScale);
// weightingOne(right, left, rest);
let whereIsBall = weightingOne(right, left, rest);
// console.log(whereIsBall[0], whereIsBall[1], whereIsBall[2]);


function weightingTwo(finalArr, right, left, functionForDividing) {
  for (let x = 0; x < 2; x++) {
    if (x < 1) {
      functionForDividing(finalArr, right);
    } else if (1 < x < 2) {
      functionForDividing(finalArr, left);
    }
  }
  if (right[0].value == left[0].value) {
    console.log(`Cięższa kulka znajduje się na indexie ${finalArr[0].index}`);
  } else
    right[0].value > left[0].value
      ? console.log(`Cięższa kulka znajduje się na indexie ${right[0].index}`)
      : console.log(`Cięższa kulka znajduje się na indexie ${left[0].index}`);
}

weightingTwo(whereIsBall, finalRight, finalLeft, dividingInScale);

// console.log(right[0], right[1], right[2]);
// console.log(left[0], left[1], left[2]);
// console.log(rest[0], rest[1]);
// console.log(arrayWithObjects);
