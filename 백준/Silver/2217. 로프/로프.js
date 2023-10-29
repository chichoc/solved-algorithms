const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0];
const ropes = inputs.slice(1).map(Number);
const answer = [];

ropes.sort((a, b) => a - b);

for (let i = 0; i < N; i++) {
  answer.push(ropes[i] * (N - i));
}

console.log(Math.max(...answer));