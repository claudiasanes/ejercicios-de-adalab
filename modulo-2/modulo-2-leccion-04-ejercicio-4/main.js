"use strict";

// function number(a) {
//   const pair = true;
//   const unpair = false;

//   if (a % 2 === 0) {
//     console.log(true);
//   } else if (a % 2 !== 0) {
//     console.log(false);
//   }

//   return pair || unpair;
// }

// console.log(number(13));

function oddEven(number) {
  return number % 2 === 0; //si el resultado es igual a 0 me dará true y si no me dará false
}

const resultOddEven = oddEven(6);

document.querySelector(".oddEven").innerHTML = resultOddEven;

console.log(resultOddEven);
