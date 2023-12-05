const _ = require('lodash')
const items = [1,4,3,6,5]

const newItems = _.flattenDeep(items);
console.log(newItems); // [ 1, 2, 3, 4 ]S

