`use strict`;
let myName = "Cbastian";
console.log(`Hello World, but this time from node.js. By ${myName}`);
// console.log(window);
console.log(global);

setInterval(() => {
  console.log(`${myName}`);
}, 1000);
