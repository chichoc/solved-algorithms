const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const str1 = inputs[0];
const str2 = inputs[1];
const len1 = str1.length;
const len2 = str2.length;
let answer = 0;

const dp = Array.from(Array(len1 + 1), () => Array(len2 + 1).fill(0));

for (let i = 1; i <= len1; i++) {
  for (let j = 1; j <= len2; j++) {
    if (str1[i - 1] === str2[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
      answer = Math.max(answer, dp[i][j]);
    }
  }
}
console.log(answer);