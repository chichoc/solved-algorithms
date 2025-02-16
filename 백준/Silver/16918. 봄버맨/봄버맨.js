const inputs = require('fs').readFileSync(0).toString().trim().split('\n'); // 입력 여러 줄
const [R, C, N] = inputs[0].split(' ').map(Number);
const grid = inputs.slice(1).map((row) => row.split(''));
const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

function accessibleBoard(row, col) {
  if (row < 0 || row >= R || col < 0 || col >= C) return false;
  return true;
}

function playBomb() {
  for (let row = 0; row < R; row++) {
    for (let col = 0; col < C; col++) {
      if (grid[row][col] === '.') continue;
      if (grid[row][col] > 0) {
        grid[row][col]--;
      } else if (grid[row][col] === 0) {
        grid[row][col] = '.';
        for (let i = 0; i < dx.length; i++) {
          const injectRow = row + dx[i];
          const injectCol = col + dy[i];
          if (!accessibleBoard(injectRow, injectCol)) continue;
          if (grid[injectRow][injectCol] === 0) continue;
          grid[injectRow][injectCol] = '.';
        }
      }
    }
  }
}

function putBomb() {
  for (let row = 0; row < R; row++) {
    for (let col = 0; col < C; col++) {
      if (grid[row][col] === '.') grid[row][col] = 2;
    }
  }
}

// 기호 변경
for (let row = 0; row < R; row++) {
  for (let col = 0; col < C; col++) {
    if (grid[row][col] === '.') continue;
    grid[row][col] = 2;
  }
}

// N초 후
for (let n = 0; n < N; n++) {
  // 0인 폭탄 폭발
  playBomb();
  // 설치되어 있지 않은 모든 칸에 폭탄 설치
  if (n % 2 === 1) putBomb();
}

console.log(grid.map((row) => row.map((col) => (typeof col === 'number' ? 'O' : '.')).join('')).join('\n'));