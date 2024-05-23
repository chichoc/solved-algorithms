const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0];
const P = inputs[1].split(' ').map(Number);
const dp = Array.from({ length: N + 1 }, () => 0);

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.max(dp[i], dp[i - j] + P[j - 1]);
  }
}

console.log(dp[N]);