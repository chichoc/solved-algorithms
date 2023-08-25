const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const dots = inputs.slice(1).map((dot) => dot.split(' ').map(Number));

console.log(
  dots
    .sort((a, b) => a[0] - b[0] || a[1] - b[1])
    .map((dot) => dot.join(' '))
    .join('\n')
);