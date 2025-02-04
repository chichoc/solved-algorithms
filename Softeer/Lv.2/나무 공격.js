// https://softeer.ai/practice/9657
const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const parseNumbers = (line) => line.split(' ').map(Number);
const [n, m] = parseNumbers(inputs[0]);
const grid = inputs.slice(1, n + 1).map((row) => parseNumbers(row));
const attackSpaces = inputs.slice(n + 1).map((input) => parseNumbers(input));

function attack([startRow, endRow]) {
  for (let row = startRow - 1; row < endRow; row++) {
    const targetIdx = grid[row].indexOf(1);
    if (targetIdx < 0) continue;
    grid[row][targetIdx] = 0;
  }
}

function countTargets(array) {
  let result = 0;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      if (array[row][col] === 0) continue;
      result++;
    }
  }
  return result;
}

for (const attackRange of attackSpaces) {
  attack(attackRange);
}

console.log(countTargets(grid));
