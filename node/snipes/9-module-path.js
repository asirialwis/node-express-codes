const path = require('path');

console.log(path.sep);

const filePath = path.join('/contents', 'test.txt');

const absolute = path.resolve(__dirname, '/contents', 'text.txt');
console.log(absolute);