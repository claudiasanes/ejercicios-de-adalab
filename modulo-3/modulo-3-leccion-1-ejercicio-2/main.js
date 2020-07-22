'use strict';

class Square {
  constructor(side) {
    this.side = side;
  }
  perimeter() {
    return this.side * 4;
  }
  area() {
    return this.side * this.side;
  }
}

const square1 = new Square(1);
const square2 = new Square(3);
const square3 = new Square(7);

square1.perimeter(9);
square3.area(9);

console.log(
  `The square 1 has ${
    square1.side
  } sides, ${square1.perimeter()} perimeter and ${square1.area()} area`
);

console.log(
  `The square 2 has ${
    square2.side
  } sides, ${square2.perimeter()} perimeter and ${square2.area()} area`
);

console.log(
  `The square 3 has ${
    square3.side
  } sides, ${square3.perimeter()} perimeter and ${square3.area()} area`
);
