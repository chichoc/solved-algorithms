const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const str1 = inputs[0],
  str2 = inputs[1];
const len1 = str1.length,
  len2 = str2.length;
let answer = 0;

const dp = Array(len1).fill(0);

for (let i = 0; i < len2; i++) {
  for (let j = len1; j >= 0; j--) {
    if (str2[i] !== str1[j]) dp[j] = 0;
    else {
      if (j === 0) dp[j] = 1;
      else dp[j] = dp[j - 1] + 1;
      answer = Math.max(answer, dp[j]);
    }
  }
}
console.log(answer);

/**
 * 처음에 N^3이라 시초
 * DP에 이전 값을 저장해서 N^2로 줄어야 함
 * DP는 이전 값을 참고하므로 1차원에 저장해도 되지만, 갱신되므로 하나는 뒤에서부터 확인해야 함 (둘다 앞에서부터 순회하면 틀림,,,완벽히 이해하지 못함ㅜ)
 */
