const inputs = require('fs').readFileSync(0).toString().trim().split('\n');

const N = +inputs[0];
const answer = [];
const XandA = inputs.slice(1).map((input) => input.split(' ').map(Number));
const totalA = XandA.reduce((sum, curr) => sum + curr[1], 0);
let sum = 0;

// 마을 번호 기준 오름차순 정렬
XandA.sort((a, b) => a[0] - b[0]);

for (let i = 0; i < N; i++) {
  sum += XandA[i][1];
  if (totalA / 2 <= sum) return console.log(XandA[i][0]);
}
console.log(XandA[N - 1][0]);