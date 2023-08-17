const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0];
const times = inputs[1].split(' ').map(Number);
let sum = 0;
let answer = 0;

times.sort((a, b) => a - b);

for (let i = 0; i < N; i++) {
  answer += sum + times[i];
  sum += times[i];
}

console.log(answer);