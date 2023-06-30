const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, M] = inputs[0].split(' ').map(Number);
const nums = inputs.slice(1).map((input) => input.split('').map(Number));

for (let i = Math.min(N, M); i > 0; i--) {
  for (let n = 0; n < N - i; n++) {
    for (let m = 0; m < M - i; m++) {
      if (nums[n][m] !== nums[n][m + i]) continue;
      if (nums[n][m] !== nums[n + i][m]) continue;
      if (nums[n + i][m] !== nums[n + i][m + i]) continue;
      return console.log((i + 1) ** 2);
    }
  }
}

console.log(1);