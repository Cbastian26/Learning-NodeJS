const path = require(`path`);

console.log(path.sep);

const BASE = path.basename(`${__dirname}\ 05-path-module.js`, `.js`);
console.log(BASE);

const ABSOLUTE = path.resolve(`content`, `subcontent`, `test.js`);
const ABSOLUTE2 = path.resolve(__dirname, `content`, `subcontent`, `test.js`);
const ABSOLUTE3 = path.resolve(`subcontent`, `test.js`);

console.log(ABSOLUTE);
console.log(ABSOLUTE2);
console.log(ABSOLUTE3);
