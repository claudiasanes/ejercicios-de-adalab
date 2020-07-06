'use strict';

const array = [3, 5, 8, 1, 2, 8];

function average() {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return console.log(sum / array.length);
}

console.log(average());
