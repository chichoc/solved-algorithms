const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

const N = +input[0];
const cache = Array(N + 1).fill(-1);
cache[3] = cache[5] = 1;

for (let i = 6; i <= N; i++) {
  if (i % 5 === 0) cache[i] = cache[i - 5] + 1;
  else if (i % 3 === 0) cache[i] = cache[i - 3] + 1;
  else if (cache[i - 5] > 0 && cache[i - 3] > 0) cache[i] = Math.min(cache[i - 5], cache[i - 3]) + 1;
}

console.log(cache[N]);