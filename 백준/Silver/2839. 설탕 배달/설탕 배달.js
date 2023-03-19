const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

const N = +input[0];
const cache = Array(N + 1).fill(0);
cache[3] = cache[5] = 1;

dp = (weight) => {
  if (cache[weight] === 0) {
    if (weight % 5 === 0) cache[weight] = dp(weight - 5) + 1;
    else if (weight % 3 === 0) cache[weight] = dp(weight - 3) + 1;
    else if (dp(weight - 5) > 0 && dp(weight - 3) > 0) cache[weight] = Math.min(dp(weight - 5), dp(weight - 3)) + 1;
    else cache[weight] = -1;
  }
  return cache[weight];
};

console.log(dp(N));