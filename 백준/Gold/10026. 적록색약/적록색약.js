const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0];
const colors = inputs.slice(1);
const drow = [1, 0, 0, -1];
const dcol = [0, 1, -1, 0];
const visitedBlind = Array.from({ length: N }, () => Array(N).fill(false));
const visitedNotBlind = Array.from({ length: N }, () => Array(N).fill(false));
const answer = [0, 0];

// 적록색약이 아닌 사람이 봤을 때
for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    if (visitedNotBlind[r][c]) continue;
    dfs(r, c, colors[r][c], false);
    answer[0]++;
  }
}

// 적록색약인 사람이 봤을 때
for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    if (visitedBlind[r][c]) continue;
    dfs(r, c, colors[r][c], true);
    answer[1]++;
  }
}

function dfs(row, col, color, flag) {
  if (flag) visitedBlind[row][col] = true;
  else visitedNotBlind[row][col] = true;

  for (let i = 0; i < 4; i++) {
    const [mrow, mcol] = [row + drow[i], col + dcol[i]];
    if (mrow < 0 || mrow >= N || mcol < 0 || mcol >= N) continue;

    if (flag) {
      if (visitedBlind[mrow][mcol]) continue;

      if (colors[mrow][mcol] !== color) {
        if (colors[mrow][mcol] === 'R' && color === 'G') dfs(mrow, mcol, color, flag);
        else if (colors[mrow][mcol] === 'G' && color === 'R') dfs(mrow, mcol, color, flag);
        else continue;
      } else dfs(mrow, mcol, color, flag);
    } else {
      if (visitedNotBlind[mrow][mcol]) continue;

      if (colors[mrow][mcol] !== color) continue;
      else dfs(mrow, mcol, color, flag);
    }
  }
}

console.log(answer.join(' '));