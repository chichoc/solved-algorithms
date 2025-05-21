const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0];
const S = inputs[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
let sum = 1;

for (let i = 0; i < N; i++) {
  if (S[i] > sum) break;
  sum += S[i];
}

console.log(sum);