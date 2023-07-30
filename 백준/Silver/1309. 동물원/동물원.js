//제출시 삭제
const N = +require('fs').readFileSync(0).toString().trim();
const dp = [1, 3];

for (let i = 2; i <= N; i++) {
  dp.push((dp[i - 2] + dp[i - 1] * 2) % 9901);
}

console.log(dp[N]);
// N = 0일 때 1
// N = 1일 때 1 + 2 = 3
// N = 2일 때 1 + 4 + 2 = 7
// N = 3일 때 1 + 6 + (3 + 3 + 1 + 1) + 2 = 17