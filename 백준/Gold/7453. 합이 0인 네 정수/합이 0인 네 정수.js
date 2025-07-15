const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0];
const A = [], B = [], C = [], D = [];

for (let i = 1; i <= N; i++) {
  const nums = inputs[i].split(' ').map(Number);
  A.push(nums[0]);
  B.push(nums[1]);
  C.push(nums[2]);
  D.push(nums[3]);
}

const AB = new Map();
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    const sum = A[i] + B[j];
    AB.set(sum, (AB.get(sum) || 0) + 1);
  }
}

let answer = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    const sum = C[i] + D[j];
    if (AB.has(-sum)) answer += AB.get(-sum);
  }
}

console.log(answer);