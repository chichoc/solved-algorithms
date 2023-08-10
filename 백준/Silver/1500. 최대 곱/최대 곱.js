const [S, K] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
let answer = 0;

for (let first = Math.ceil(S / K); first > 0; first--) {
  const result = multiply(1, first, first);
  answer = Math.max(answer, result);
}

function multiply(count, sum, result) {
  if (count === K) return result;
  const nextNum = Math.floor((S - sum) / (K - count));
  return multiply(count + 1, sum + nextNum, result * nextNum);
}

console.log(answer);