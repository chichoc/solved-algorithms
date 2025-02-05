// https://softeer.ai/practice/7353
const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const n = +inputs[0];
const fInfos = inputs[1].split(' ').map(Number);
let answer = -10000;

function combination(num) {
  const result = [];

  for (let i = 0; i < num; i++) {
    for (let j = i + 1; j < num; j++) {
      result.push([i, j]);
    }
  }
  return result;
}

const combis = combination(n);

for (const [idx1, idx2] of combis) {
  answer = Math.max(answer, fInfos[idx1] * fInfos[idx2]);
}

console.log(answer);
