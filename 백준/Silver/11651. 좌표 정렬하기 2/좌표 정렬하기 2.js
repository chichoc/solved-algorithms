const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const dots = inputs.slice(1).map((dot) => dot.split(' ').map(Number));

dots.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

console.log(dots.map((dot) => dot[0] + ' ' + dot[1]).join('\n'));