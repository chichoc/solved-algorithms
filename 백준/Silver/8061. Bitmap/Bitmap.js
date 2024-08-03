const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const [n, m] = inputs[0].split(' ').map(Number);
const bitmap = inputs.slice(1).map((input) => input.split('').map(Number));
const answer = Array.from({ length: n }, () => Array(m).fill(0));
const whitePositions = [];

const findNearestWhite = (row, col) => {
  let minDistance = Infinity;
  for (const [wr, wc] of whitePositions) {
    const distance = Math.abs(row - wr) + Math.abs(col - wc);
    if (distance < minDistance) minDistance = distance;
  }
  return minDistance;
};

for (let row = 0; row < n; row++) {
  for (let col = 0; col < m; col++) {
    if (bitmap[row][col] === 0) continue;
    whitePositions.push([row, col]);
  }
}

for (let row = 0; row < n; row++) {
  for (let col = 0; col < m; col++) {
    answer[row][col] = bitmap[row][col] === 1 ? 0 : findNearestWhite(row, col);
  }
}

console.log(answer.map(row => row.join(' ')).join('\n'));