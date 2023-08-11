const inputs = require('fs').readFileSync(0).toString().trim().split('-');
let answer = 0;

for (let i = 0; i < inputs.length; i++) {
  let sum = inputs[i]
    .split('+')
    .map(Number)
    .reduce((sum, curr) => sum + curr, 0);

  answer += i > 0 ? -sum : sum;
}

console.log(answer);