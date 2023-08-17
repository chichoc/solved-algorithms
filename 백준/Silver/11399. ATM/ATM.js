const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0];
const times = inputs[1].split(' ').map(Number);
let answer = 0;

times.sort((a, b) => a - b);

for (let i = 0; i < N; i++) {
  answer += times[i] * (N - i);
}

console.log(answer);