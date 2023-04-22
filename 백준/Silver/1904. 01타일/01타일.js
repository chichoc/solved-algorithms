const N = +require('fs').readFileSync(0).toString().trim();
const cache = [0, 1, 2];

for (let i = 3; i <= N; i++) {
  cache[i] = (cache[i - 1] + cache[i - 2]) % 15746;
}

console.log(cache[N]);