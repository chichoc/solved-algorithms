// https://softeer.ai/practice/6295
const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const T = +inputs[0];
const cases = inputs.slice(1).map((input) => input.split(' ').map(Number));
let answer = '';

function add(a, b) {
  return a + b;
}

for (let i = 0; i < T; i++) {
  const [a, b] = cases[i];
  answer += `Case #${i + 1}: ${add(a, b)}\n`;
}

console.log(answer);
