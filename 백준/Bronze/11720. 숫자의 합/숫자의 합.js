const input = require('fs').readFileSync(0).toString().split('\n');

console.log(input[1].split('').reduce((sum, num) => sum + +num, 0));