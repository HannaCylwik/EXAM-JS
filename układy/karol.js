const balls = [1, "1a", "1b", "1c", 2, "1d", "1e", "1f"];
const groupOne = [];
const groupTwo = [];
const groupThree = [];

const createGroupsOfBalls = function(a, b, c) {
  const balls2 = [...balls];
  for (let i = 0; i < balls2.length; i++) {
    let random = balls2[Math.floor(Math.random() * balls2.length)];
    a.push(random);
    balls2.splice(balls2.indexOf(random), 1);
    if (a.length == 3) {
      break;
    }
  }
  for (let i = 0; i < balls2.length; i++) {
    let random = balls2[Math.floor(Math.random() * balls2.length)];
    b.push(random);
    balls2.splice(balls2.indexOf(random), 1);
    if (b.length == 3) {
      break;
    }
  }
  for (let i = 0; i <= balls2.length; i++) {
    let random = balls2[Math.floor(Math.random() * balls2.length)];
    c.push(random);
    balls2.splice(balls2.indexOf(random), 1);
  }
  console.log(balls);
};

const weightAttempts = function(a, b, c, d) {
  let sum1 = 0;
  let sum2 = 0;
  let highest = 0;

  (function firstAttempt() {
    a.forEach(function(el, i, a) {
      sum1 += a[i];
    });

    b.forEach(function(el, i, b) {
      sum2 += b[i];
    });

    sum1 == sum2
      ? console.log(
          "Po pierwszym ważeniu wiemy, że najcięższa kulka znajduje się w grupie 3"
        )
      : console.log(
          `Po pierwszym ważeniu wiemy, że najcięzsza kulka znajduje się w grupie ${
            sum1 > sum2 ? "pierwszej" : "drugiej"
          }`
        );
  })();

  (function secondAttempt() {
    if (sum1 == sum2) {
      c.forEach(function(el, i, c) {
        c[i] > highest ? (highest = c[i]) : highest;
      });
      console.log(
        `Po drugim ważeniu wiemy jaką dokładnie wagę ma najcięższa kulka znajdująca się w grupie trzeciej i dzięki temu wiemy, ze leży na indexie nr ${d.indexOf(
          highest
        )} w tablicy zawierającej wszystkie kulki`
      );
    } else {
      if (sum1 > sum2) {
        a.forEach(function(el, i, a) {
          a[i] > highest ? (highest = a[i]) : highest;
        });
        console.log(
          `Po drugim ważeniu wiemy jaką dokładnie wagę ma najcięższa kulka znajdująca się w grupie pierwszej i dzięki temu wiemy, ze leży na indexie nr ${d.indexOf(
            highest
          )} w tablicy zawierającej wszystkie kulki`
        );
      } else {
        b.forEach(function(el, i, b) {
          b[i] > highest ? (highest = b[i]) : highest;
        });
        console.log(
          `Po drugim ważeniu wiemy jaką dokładnie wagę ma najcięższa kulka znajdująca się w grupie drugiej i dzięki temu wiemy, ze leży na indexie nr ${d.indexOf(
            highest
          )} w tablicy zawierającej wszystkie kulki`
        );
      }
    }
  })();
};

createGroupsOfBalls(groupOne, groupTwo, groupThree);

weightAttempts(groupOne, groupTwo, groupThree, balls);
