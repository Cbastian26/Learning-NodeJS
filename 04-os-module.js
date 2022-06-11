/* Operative System Module */
const os = require(`os`);

// Info about current user
const user = os.userInfo();
console.log(user);

// Method returns the system uptime in seconds
console.log(os.uptime());

const currentrOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentrOS);
