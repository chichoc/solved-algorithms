const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

const inputs = input.map((string) => string.split(' ').map(Number));
const cache = [...Array(21)].map(() => Array.from({ length: 21 }, () => Array(21)));

for (let a = 0; a < 21; a++) {
  for (let b = 0; b < 21; b++) {
    for (let c = 0; c < 21; c++) {
      if (a <= 0 || b <= 0 || c <= 0) cache[a][b][c] = 1;
      else if (a < b && b < c) cache[a][b][c] = cache[a][b][c - 1] + cache[a][b - 1][c - 1] - cache[a][b - 1][c];
      else
        cache[a][b][c] =
          cache[a - 1][b][c] + cache[a - 1][b - 1][c] + cache[a - 1][b][c - 1] - cache[a - 1][b - 1][c - 1];
    }
  }
}

w = (a, b, c) => {
  if (a <= 0 || b <= 0 || c <= 0) return cache[0][0][0];
  else if (a > 20 || b > 20 || c > 20) return cache[20][20][20];
  else return cache[a][b][c];
};

for (const [a, b, c] of inputs) {
  if (a === -1 && b === -1 && c === -1) break;
  console.log(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
}