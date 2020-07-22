'use strict';

const marks = [5, 4, 6, 7, 9];
const getBetterMarks = (mark) => (mark += 1);
const inflatedMarks = marks.map(getBetterMarks);
console.log(inflatedMarks);

// --- esta es la versión corta de lo mismo ---
// const marks = [5, 4, 6, 7, 9];
// const inflatedMarks = marks.map(mark => mark++);
// console.log(inflatedMarks);
