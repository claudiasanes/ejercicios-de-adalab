'use strict';

function get100Numbers() {
  let numbers = [];
  for (let i = 0; i < 100; i++) {
    numbers.push(i + 1);
  }
  return numbers;
}

console.log(get100Numbers());

function getReversed100Numbers() {
  let reverseNumbers = get100Numbers().reverse();
  return reverseNumbers;
}

console.log(getReversed100Numbers());
