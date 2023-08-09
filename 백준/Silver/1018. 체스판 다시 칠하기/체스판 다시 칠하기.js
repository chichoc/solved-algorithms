const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, M] = inputs[0].split(' ').map(Number);
const board = inputs.slice(1);
const drow = [0, 1];
const dcol = [1, 0];
let answer = N * M;

for (let row = 0; row <= N - 8; row++) {
  for (let col = 0; col <= M - 8; col++) {
    const numberOfPaintBlackFirst = bfs(row, col, 'B');
    const numberOfPaintWhiteFirst = bfs(row, col, 'W');
    answer = Math.min(answer, numberOfPaintBlackFirst, numberOfPaintWhiteFirst);
  }
}

function bfs(r, c, color) {
  const queue = [[r, c, 0]];
  const colors = [color, color === 'B' ? 'W' : 'B'];
  const visitedBoard = Array.from({ length: N }, () => Array(M).fill(false));
  visitedBoard[r][c] = true;
  const copiedBoard = board.slice();
  let paint = 0;

  while (queue.length) {
    const [row, col, order] = queue.shift();

    // 다시 칠하기
    if (copiedBoard[row][col] !== colors[order % 2]) {
      copiedBoard[row][col] = colors[order % 2];
      paint++;
    }

    // 주변 확인
    for (let i = 0; i < 2; i++) {
      const [mrow, mcol] = [row + drow[i], col + dcol[i]];
      if (mrow < r || mrow >= r + 8 || mcol < c || mcol >= c + 8) continue;
      if (visitedBoard[mrow][mcol]) continue;

      queue.push([mrow, mcol, order + 1]);
      visitedBoard[mrow][mcol] = true;
    }
  }
  return paint;
}

console.log(answer);