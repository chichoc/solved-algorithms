const [T, ...N] = require('fs').readFileSync(0).toString().trim().split('\n');

const cache = [0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9];

for (let i = 10; i <= Math.max(...N); i++) {
  cache[i] = cache[i - 1] + cache[i - 5];
}

console.log(N.map((n) => cache[n]).join('\n'));