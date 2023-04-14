const [N, S, ...nums] = require('fs').readFileSync(0).toString().split(/\s+/).map(Number);
let count = 0;

dfs(0, 0);
console.log(count);

function dfs(depth, sum) {
  if (depth === N) return;

  sum += nums[depth];
  if (sum === S) count++;

  dfs(depth + 1, sum);
  dfs(depth + 1, sum - nums[depth]);
}