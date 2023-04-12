const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

const a = new Set(input[1].split(' '));
console.log(
  input[3]
    .split(' ')
    .map((str) => (a.has(str) ? 1 : 0))
    .join('\n')
);