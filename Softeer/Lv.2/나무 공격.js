// https://softeer.ai/practice/9657
const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const [n, m] = inputs[0].split(' ').map(Number);
const map = inputs.slice(1, n + 1).map((row) => row.split(' ').map(Number));
const attackSpaces = inputs.slice(n + 1).map((input) => input.split(' ').map(Number));

function attack([startRow, endRow]) {
  for (let row = startRow - 1; row < endRow; row++) {
    const targetIdx = map[row].indexOf(1);
    if (targetIdx < 0) continue;
    map[row][targetIdx] = 0;
  }
}

function countTarget(array) {
  let result = 0;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      if (array[row][col] === 0) continue;
      result++;
    }
  }
  return result;
}

for (let i = 0; i < 2; i++) {
  attack(attackSpaces[i]);
}

console.log(countTarget(map));
