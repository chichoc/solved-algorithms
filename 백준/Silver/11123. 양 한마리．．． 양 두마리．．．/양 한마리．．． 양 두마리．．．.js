const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const T = +inputs[0];
const answer = [];
const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];
let cursor = 1;

function dfs(row, col, grid, visited) {
  visited[row][col] = true;

  for (let i = 0; i < 4; i++) {
    const nrow = row + dr[i];
    const ncol = col + dc[i];
    if (checkOver(nrow, ncol)) continue;
    if (visited[nrow][ncol] || grid[nrow][ncol] === '.') continue;
    dfs(nrow, ncol, grid, visited);
  }
}

for (let i = 0; i < T; i++) {
  const [H, W] = inputs[cursor].split(' ').map(Number);
  const grid = inputs.slice(cursor + 1, cursor + H + 1).map((input) => input.split(''));
  const visited = Array.from({ length: H }, () => Array(W).fill(false));
  let result = 0;

  function checkOver(r, c) {
    return r < 0 || r >= H || c < 0 || c >= W;
  }

  for (let r = 0; r < H; r++) {
    for (let c = 0; c < W; c++) {
      if (visited[r][c] || grid[r][c] === '.') continue;
      dfs(r, c, grid, visited);
      result++;
    }
  }

  answer.push(result);
  cursor += H + 1;
}

console.log(answer.join('\n'));