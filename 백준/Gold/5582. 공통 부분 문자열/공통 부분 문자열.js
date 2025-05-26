const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const str1 = inputs[0],
  str2 = inputs[1];
const len1 = str1.length,
  len2 = str2.length;
let answer = 0;

const dp = Array(len1).fill(0);

for (let i = 0; i < len2; i++) {
  for (let j = len1 - 1; j >= 0; j--) {
    if (str2[i] !== str1[j]) dp[j] = 0;
    else {
      if (j === 0) dp[j] = 1;
      else dp[j] = dp[j - 1] + 1;
      answer = Math.max(answer, dp[j]);
    }
  }
}
console.log(answer);