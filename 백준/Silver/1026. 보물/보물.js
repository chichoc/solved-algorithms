const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0];
const [A, B] = inputs.slice(1).map((str) => str.split(' ').map(Number));
let answer = 0;

A.sort((a, b) => a - b);
B.sort((a, b) => b - a);

for (let i = 0; i < N; i++) {
  answer += A[i] * B[i];
}

console.log(answer);