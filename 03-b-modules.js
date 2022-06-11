const sayHi = require(`./03-a-modules`);
const names = require(`./03-c-modules`);
/* let jhon = names.jhon;
let peter = names.peter;
 */
let { jhon, peter } = names;

sayHi(`Cba`);
sayHi(jhon);
sayHi(peter);
