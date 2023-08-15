const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0];
const candys = inputs.slice(1).map(Number);
const answer = [];

let first = 0;
for (let i = 0; i < N; i++) {
  first += i % 2 ? -candys[i] : candys[i];
}
answer.push(first / 2);

for (let i = 0; i < N - 1; i++) {
  answer.push(candys[i] - answer[i]);
}

console.log(answer.join('\n'));