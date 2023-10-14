const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const map = inputs.map((input) => input.split(' ').map(Number));
const numberOfPaper = Array(5).fill(5);
const N = 10;
let answer = Infinity;

dfs(0, 0);

function dfs(idx, cnt) {
  if (idx >= N * N) return (answer = Math.min(cnt, answer));
  if (answer <= cnt) return;

  const [r, c] = [~~(idx / N), idx % N];
  if (map[r][c]) {
    for (let size = 5; size >= 1; size--) {
      if (numberOfPaper[size - 1] === 0 || !isSquare(r, c, size)) continue;
      numberOfPaper[size - 1]--;
      setMap(r, c, size, false);
      dfs(idx + 1, cnt + 1);

      numberOfPaper[size - 1]++;
      setMap(r, c, size, true);
    }
  } else dfs(idx + 1, cnt);
}

function isSquare(r, c, size) {
  for (let i = r; i < r + size; i++) {
    for (let j = c; j < c + size; j++) {
      if (i < 0 || i >= N || j < 0 || j >= N || !map[i][j]) return false;
    }
  }
  return true;
}

function setMap(r, c, size, boolean) {
  for (let i = r; i < r + size; i++) {
    for (let j = c; j < c + size; j++) {
      map[i][j] = boolean;
    }
  }
}

console.log(answer === Infinity ? -1 : answer);