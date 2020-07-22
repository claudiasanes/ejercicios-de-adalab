'use strict';

class Square {
  perimeter(side) {
    return side * 4;
  }
  area(side) {
    return side ** 2;
  }
}

const squarePerimeter = new Square();
const squareArea = new Square();

squarePerimeter.perimeter(9);
squarePerimeter.area(9);

console.log(squarePerimeter.perimeter(9));
console.log(squarePerimeter.area(9));
