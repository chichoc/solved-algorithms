const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const T = +inputs[0];
const answer = [];

for (let i = 1; i <= T; i++) {
  const isVPS = checkVPS(inputs[i]);
  answer.push(isVPS ? 'YES' : 'NO');
}

function checkVPS(str) {
  let count = 0;
  for (char of str) {
    char === '(' ? count++ : count--;
    if (count < 0) return false;
  }
  return count === 0 ? true : false;
}

console.log(answer.join('\n'));