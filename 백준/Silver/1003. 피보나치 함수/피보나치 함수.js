const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const tests = inputs.slice(1).map(Number);
const dp = [
  [1, 0],
  [0, 1],
];
let answer = '';

for (let i = 2; i <= Math.max(...tests); i++) {
  const countToPush = dp[i - 2].map((count, idx) => count + dp[i - 1][idx]);
  dp.push(countToPush);
}

for (const test of tests) {
  answer += dp[test].join(' ') + '\n';
}

console.log(answer.trimEnd());