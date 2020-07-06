"use strict";

const btnEl = document.querySelector(".btn");

const handleBtnClick = (event) => {
  console.log(event.currentTarget);
  console.log(event.target);
};

btnEl.addEventListener("click", handleBtnClick);
