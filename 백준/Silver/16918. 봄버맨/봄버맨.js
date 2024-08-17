const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const [R, C, N] = inputs[0].split(' ').map(Number);
const board = inputs.slice(1).map((input) => input.split(''));
const prevBomb = [];
const space = '.';
const bomb = 'O';
const evenBoard = Array.from({ length: R }, () => bomb.repeat(C));
const directRow = [1, -1, 0, 0];
const directCol = [0, 0, 1, -1];

function isOverBoard(r, c) {
  if (r < 0 || r >= R || c < 0 || c >= C) return true;
  return false;
}

function checkBomb() {
  for (let row = 0; row < R; row++) {
    for (let col = 0; col < C; col++) {
      if (board[row][col] === space) continue;
      prevBomb.push([row, col]);
    }
  }
}

function explodeBomb() {
  board.forEach((_, idx) => (board[idx] = Array(C).fill(bomb)));

  for (const [row, col] of prevBomb) {
    board[row][col] = space;
    for (let i = 0; i < 4; i++) {
      const [adjacentRow, adjacentCol] = [row + directRow[i], col + directCol[i]];
      if (isOverBoard(adjacentRow, adjacentCol)) continue;
      board[adjacentRow][adjacentCol] = space;
    }
  }
  prevBomb.length = 0;
}

if (N % 2 === 0) return console.log(evenBoard.join('\n'));

for (let i = 0; i < N; i += 2) {
  if (i > 0) explodeBomb();
  checkBomb();
}

console.log(board.map((row) => row.join('')).join('\n'));