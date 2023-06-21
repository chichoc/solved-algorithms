const inputs = require('fs').readFileSync(0).toString().trim().split('\n');

let answer = '';
const T = +inputs[0];
const cases = inputs.slice(1).map((input) => input.split(' ').map(Number));

for (let i = 0; i < T; i++) {
  const [N, M] = cases[i];
  answer += `${Math.round(factorial(M) / (factorial(N) * factorial(M - N)))}\n`;
}

console.log(answer.trimEnd());
function factorial(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}
