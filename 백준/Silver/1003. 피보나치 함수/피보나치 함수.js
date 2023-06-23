const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0];
const tests = inputs.slice(1).map(Number);
const dp = [
  [1, 0],
  [0, 1],
];
let answer = '';

for (let i = 2; i <= Math.max(...tests); i++) {
  const countOfZero = dp[i - 2][0] + dp[i - 1][0];
  const countOfOne = dp[i - 2][1] + dp[i - 1][1];
  dp.push([countOfZero, countOfOne]);
}

for (const test of tests) {
  answer += dp[test].join(' ') + '\n';
}

console.log(answer.trimEnd());