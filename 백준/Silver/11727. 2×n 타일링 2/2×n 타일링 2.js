const N = +require('fs').readFileSync(0).toString().trim(); // 입력 한 줄
const dp = Array(N + 1).fill(0);
dp[1] = 1;
dp[2] = 3;

for (let i = 3; i <= N; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
}

console.log(dp[N]);