const inputs = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);
const nums = inputs.slice(1);
const maxNum = Math.max(...nums);
const answer = [];
const dp = [0, 1, 2, 4];

for (let i = 4; i <= maxNum; i++) {
  let result = 0;
  for (let j = 1; j <= 3; j++) {
    result += dp[i - j];
  }
  dp[i] = result;
}

for (const num of nums) {
  answer.push(dp[num]);
}

console.log(answer.join('\n'));