const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, M] = inputs[0].split(' ').map(Number);
const nums = inputs[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const visited = Array(N).fill(false);
const answer = [];

for (let i = 0; i < N; i++) {
  visited[i] = true;
  dfs(1, nums[i], visited);
  visited[i] = false;
}

function dfs(count, str) {
  if (count === M) answer.push(str);
  for (let j = 0; j < N; j++) {
    if (visited[j]) continue;
    visited[j] = true;
    dfs(count + 1, `${str} ${nums[j]}`, visited);
    visited[j] = false;
  }
}

console.log(answer.join('\n'));