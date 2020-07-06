'use strict';

let acc = 0;

// conseguimos que itere 10 veces y luego especifico que quiero que cada vez se sumen 2 en vez de 1
for (let i = 0; i < 10; i += 1) {
  acc = acc + 2;
}

console.log('El resultado es: ' + acc); // esto va fuera porque solo queremos que nos lo haga 1 vez, no lo haga en bucle
