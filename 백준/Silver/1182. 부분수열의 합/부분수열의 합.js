const input = require('fs').readFileSync(0).toString().split('\n');
const [N, S] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);

const selectedNums = [];
let count = 0;

dfs(0);
console.log(S === 0 ? count - 1 : count);

function dfs(depth) {
  if (depth === N) {
    const sum = selectedNums.reduce((sum, num) => sum + num, 0);
    if (sum === S) count++;
    return;
  }

  selectedNums.push(nums[depth]);
  dfs(depth + 1);
  selectedNums.pop();
  dfs(depth + 1);
}