const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0];
const times = inputs[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);

for (let i = 0; i < N; i++) {
  times[i] += i + 1;
}

console.log(Math.max(...times) + 1);