const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0];
const board = inputs.slice(1).map((input) => input.split(''));
const dr = [-1, -1, -1, 0, 0, 1, 1, 1];
const dc = [-1, 0, 1, -1, 1, -1, 0, 1];
const empty = [];
const answer = [];
let maxFlip = 0;

function dfs(row, col, pos) {
  let count = 0;
  if (board[row][col] !== 'W') return 0;
  while (true) {
    row += dr[pos];
    col += dc[pos];
    if (row < 0 || row >= N || col < 0 || col >= N) return 0;
    if (board[row][col] === 'W') {
      count++;
    } else if (board[row][col] === 'B') {
      return count + 1;
    } else {
      return 0;
    }
  }
}

for (let row = 0; row < N; row++) {
  for (let col = 0; col < N; col++) {
    if (board[row][col] === '.') {
      empty.push([row, col]);
    }
  }
}

for (const [er, ec] of empty) {
  let flip = 0;

  for (let i = 0; i < 8; i++) {
    const nr = er + dr[i];
    const nc = ec + dc[i];

    if (nr < 0 || nr >= N || nc < 0 || nc >= N) continue;
    if (board[nr][nc] !== 'W') continue;
    flip += dfs(nr, nc, i);
  }

  if (flip === 0) continue;
  if (maxFlip < flip) {
    maxFlip = flip;
    answer.length = 0;
    answer.push([ec, er]);
  } else if (maxFlip === flip) {
    answer.push([ec, er]);
  }
}

if (answer.length === 0) console.log('PASS');
else {
  const [x, y] = answer.sort((a, b) => a[1] - b[1] || a[0] - b[0])[0];
  console.log(`${x} ${y}\n${maxFlip}`);
}