const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const T = +inputs[0];
const five = '++++ ';
const one = '|';
let answer = '';

function divideFive(num) {
  return [Math.floor(num / 5), num % 5];
}

for (let i = 1; i <= T; i++) {
  const [m, n] = divideFive(+inputs[i]);
  answer += five.repeat(m) + one.repeat(n) + '\n';
}

console.log(answer);
