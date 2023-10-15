const [N, M] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
const answer = [];

for (let n = 1; n <= N; n++) {
  answer.push(...dfs([], [n]));
}

function dfs(arr, depth) {
  if (depth.length === M) arr.push(depth.join(' '));
  else {
    for (let n = depth[depth.length - 1]; n <= N; n++) {
      dfs(arr, [...depth, n]);
    }
  }

  return arr;
}

console.log(answer.join('\n'));