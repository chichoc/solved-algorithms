const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const T = +inputs[0];
const fiveUnit = '++++ ';
const oneUnit = '|';
let answer = '';

function convertScoreToSymbols(score) {
  const fiveCount = Math.floor(score / 5);
  const oneCount = score % 5;
  return fiveUnit.repeat(fiveCount) + oneUnit.repeat(oneCount);
}

for (let i = 1; i <= T; i++) {
  const [m, n] = convertScoreToSymbols(+inputs[i]);
  answer += convertScoreToSymbols(+inputs[i]) + '\n';
}

console.log(answer);
