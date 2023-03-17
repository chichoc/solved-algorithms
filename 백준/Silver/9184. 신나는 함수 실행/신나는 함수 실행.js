const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

const inputs = input.map((string) => string.split(' ').map((num) => +num));
const cache = Array.from({ length: 21 }, () => Array.from({ length: 21 }, () => []));

const w = (a, b, c) => {
  if (a <= 0 || b <= 0 || c <= 0) return 1;
  if (a > 20 || b > 20 || c > 20) return w(20, 20, 20);
  if (cache[a][b][c]) return cache[a][b][c];
  else if (a < b && b < c) {
    return (cache[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c));
  } else return (cache[a][b][c] = w(a - 1, b, c) + w(a - 1, b - 1, c) + w(a - 1, b, c - 1) - w(a - 1, b - 1, c - 1));
};

for (const [a, b, c] of inputs) {
  if (a === -1 && b === -1 && c === -1) break;
  console.log(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
}