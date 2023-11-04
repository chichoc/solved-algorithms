const N = +require('fs').readFileSync(0).toString().trim();
const dp = Array(N).fill(0);
dp[0] = 1;
dp[1] = 1;

for (let i = 2; i < N; i++) {
  dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
}

console.log(String(dp[N - 1]));