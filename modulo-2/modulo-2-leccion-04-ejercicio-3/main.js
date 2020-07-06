"use strict";

function iva(a) {
  const noIVA = a;
  const IVA21 = a * 0.21;
  const result = noIVA + IVA21;
  return "Precio sin IVA:" + noIVA + ", IVA:" + IVA21 + " y Total:" + result;
}

console.log(iva(10));
