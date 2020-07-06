"use strict";

"use strict";
function getEl(selector) {
  const element = document.querySelector(selector);
  if (!element) {
    console.log(
      `No existe ningún elemento con clase, id o tag llamado {aquí-el-nombre-del-selector}`
    );
  }
  return element;
}
console.log(getEl(".lorem"));

const el = getEL(".title");
