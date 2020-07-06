'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];

function bestLostNumber() {
  let evenNumbers = [];
  for (let i = 0; i < lostNumbers.length; i++) {
    // Si el número es par, meterlo en el evenNumbers con push();
    if (lostNumbers[i] % 2 === 0) {
      evenNumbers.push(lostNumbers[i]);
    }
  }

  let threeNumbers = [];
  for (let i = 0; i < lostNumbers.length; i++) {
    // Si es múltiplo de 3, es decir, si al dividir entre tres el resto es 0, meterlo en el threeNumbers con push();
    if (lostNumbers[i] % 3 === 0) {
      threeNumbers.push(lostNumbers[i]);
    }
  }
  let result = evenNumbers.concat(threeNumbers);
  return result;
}

console.log(bestLostNumber());
