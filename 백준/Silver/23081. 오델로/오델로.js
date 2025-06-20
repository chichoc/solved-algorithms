const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0];
const board = inputs.slice(1).map((input) => input.split(''));
const dr = [-1, -1, -1, 0, 0, 1, 1, 1];
const dc = [-1, 0, 1, -1, 1, -1, 0, 1];
let y, x = 0;
let maxFlip = 0;

function find(row, col, pos) {
  let count = 0;

  while (true) {
    row += dr[pos];
    col += dc[pos];
    if (row < 0 || row >= N || col < 0 || col >= N || board[row][col] === '.') {
      count = 0;
      break;
    }

    if (board[row][col] === 'W') count++;
    else if (board[row][col] === 'B') break;
  }
  return count;
}

for (let row = 0; row < N; row++) {
  for (let col = 0; col < N; col++) {
    if (board[row][col] !== '.') continue;
    let flip = 0;

    for (let i = 0; i < 8; i++) {
      flip += find(row, col, i);
    }

    if (maxFlip < flip) {
      maxFlip = flip;
      [x, y] = [row, col];
    }
  }
}

console.log(maxFlip > 0 ? `${y} ${x}\n${maxFlip}` : 'PASS');