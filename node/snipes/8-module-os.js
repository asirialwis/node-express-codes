
const os = require('os')

const user = os.userInfo()
console.log(user);

const time = os.uptime()
console.log(time);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);
