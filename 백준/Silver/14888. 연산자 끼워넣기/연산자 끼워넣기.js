const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const numberOfNums = +inputs[0];
const nums = inputs[1].split(' ').map(Number);
const numberOfOperators = inputs[2].split(' ').map(Number);
let minValue = 1000000000;
let maxValue = -1000000000;

dfs(1, nums[0], ...numberOfOperators);

function dfs(count, result, p, mi, mu, d) {
  if (count === numberOfNums) {
    minValue = Math.min(result, minValue);
    maxValue = Math.max(result, maxValue);
    return;
  }
  if (p > 0) dfs(count + 1, result + nums[count], p - 1, mi, mu, d);
  if (mi > 0) dfs(count + 1, result - nums[count], p, mi - 1, mu, d);
  if (mu > 0) dfs(count + 1, result * nums[count], p, mi, mu - 1, d);
  if (d > 0) dfs(count + 1, ~~(result / nums[count]), p, mi, mu, d - 1);
}

console.log(`${maxValue} \n${minValue}`);