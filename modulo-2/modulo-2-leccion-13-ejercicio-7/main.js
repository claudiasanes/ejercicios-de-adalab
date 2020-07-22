'use strict';

const times = [56, 9, 45, 28, 35];
const averageTime =
  times.reduce((acc, seconds) => acc + seconds, 0) / times.length;

console.log(averageTime);
