// https://softeer.ai/practice/7353
const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const n = +inputs[0];
const fInfos = inputs[1].split(' ').map(Number);
let answer = -Infinity;

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    answer = Math.max(answer, fInfos[i] * fInfos[j]);
  }
}

console.log(answer);
