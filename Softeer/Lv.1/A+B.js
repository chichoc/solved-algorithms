// https://softeer.ai/practice/6295
const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const T = +inputs[0];
const answer = [];

function add(a, b) {
  return a + b;
}

for (let i = 1; i <= T; i++) {
  const [a, b] = inputs[i].split(' ').map(Number);
  answer.push(`Case #${i}: ${add(a, b)}`);
}

console.log(answer.join('\n'));
