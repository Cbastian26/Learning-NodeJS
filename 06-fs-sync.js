const { readFileSync, writeFileSync } = require(`fs`);

const FIRST = readFileSync(`./content/first.txt`, `utf-8`);
const SECOND = readFileSync(`./content/second.txt`, `utf-8`);

let thirdContent = `Hi Cbastian, I'm the third text, I will show you the first text: ${FIRST} and the second text ${SECOND}`;

/* const THIRD = writeFileSync(`./content/third.txt`, thirdContent, {
  flag: `a`,
}); */
// console.log(THIRD);  ------------->  This will be UNDEFINED

writeFileSync(`./content/third.txt`, thirdContent, { flag: `a` });

const THIRD = readFileSync(`./content/third.txt`, `utf-8`);
console.log(THIRD);
