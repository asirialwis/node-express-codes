const{readFileSync , writeFileSync} = require('fs');

const first = readFileSync('firsr.txt' , 'utf8');
const second = readFileSync('second.txt','utf8');

console.log(first ,second);

writeFileSync('result-sync.txt',`Here is the result ${first}, ${second}`);

