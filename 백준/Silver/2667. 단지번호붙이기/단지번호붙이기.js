const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0];
const map = inputs.slice(1).map((input) => input.split('').map(Number));
const visited = Array.from({ length: N }, () => Array(N).fill(false));
const answer = [];
const drow = [0, 0, 1, -1];
const dcol = [1, -1, 0, 0];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (visited[i][j] || !map[i][j]) continue;
    answer.push(dfs(i, j, 1));
  }
}

function dfs(row, col, count) {
  visited[row][col] = true;

  for (let i = 0; i < 4; i++) {
    const [mrow, mcol] = [row + drow[i], col + dcol[i]];
    if (mrow < 0 || mrow >= N || mcol < 0 || mcol >= N) continue;
    if (visited[mrow][mcol] || !map[mrow][mcol]) continue;

    count = dfs(mrow, mcol, count + 1);
  }
  return count;
}

answer.sort((a, b) => a - b);

console.log(`${answer.length}\n${answer.join('\n')}`);