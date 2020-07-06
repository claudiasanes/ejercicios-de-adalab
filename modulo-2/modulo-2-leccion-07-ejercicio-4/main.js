'use strict';

// sabemos que se vió en 2017, tendremos que emezr a partir de ese año
let fullmoon = 2017;

for (let luna = 0; luna < 15; luna++) {
  fullmoon = fullmoon + 3; // también se podría poner fullmoon += 3;
  console.log('La luna se verá el 5 de octube de: ' + fullmoon);
}
