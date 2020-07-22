'use strict';

const pins = [2389, 2384, 2837, 5232, 8998];
const evenNumbers = pins.filter((number) => number % 2 === 0);

console.log(evenNumbers);
