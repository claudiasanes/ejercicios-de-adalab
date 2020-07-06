"use strict";

function workWithMovies() {
  const arr = ["Harold and Maude", "Lucky", "Dogtooth"];
  arr[3] = "Portrait of a lady on fire";
  arr[1] = "Bacurau";
  arr[2] = "Daysies";
  console.log(arr);

  return arr;
}

console.log(workWithMovies());
