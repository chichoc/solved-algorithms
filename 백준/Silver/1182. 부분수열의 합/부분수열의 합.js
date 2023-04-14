const [N, S, ...nums] = require('fs').readFileSync(0).toString().split(/\s+/).map(Number);
let count = 0;

dfs(0, 0);
console.log(count);

function dfs(sum, start) {
  if (start > 0 && sum === S) count++;

  for (let i = start; i < N; i++) {
    dfs(sum + nums[i], ++start);
  }
}