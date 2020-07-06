"use strict";

const pearBasket = {
  maxNumberPears: 10,
  minNumberPears: 2,
  currentNumberPears: 5,
  inicialNumberPears: 1,

  // paso 1
  add: function (number) {
    this.currentNumberPears = this.currentNumberPears + number;
  },

  // paso 2
  remove: (number) => {
    console.log(
      (pearBasket.currentNumberPears = pearBasket.currentNumberPears - number)
    );
  },

  //paso 3 NO ESTÁ RESUELTO
  reser: function () {
    this.currentNumberPears = this.inicialNumberPears;
  },
};

pearBasket.add(3);
console.log(pearBasket.currentNumberPears);
pearBasket.remove(2);
console.log(pearBasket.currentNumberPears);
pearBasket.reset();
