const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const numberOfAllOperator = inputs[0] - 1;
const nums = inputs[1].split(' ').map(Number);
const numberOfOperators = inputs[2].split(' ').map(Number);
let minValue = 1000000000;
let maxValue = -1000000000;

dfs(0, nums[0], ...numberOfOperators);

function dfs(count, result, p, mi, mu, d) {
  if (count === numberOfAllOperator) {
    minValue = Math.min(result, minValue);
    maxValue = Math.max(result, maxValue);
  }
  if (p > 0) dfs(count + 1, result + nums[count + 1], p - 1, mi, mu, d);
  if (mi > 0) dfs(count + 1, result - nums[count + 1], p, mi - 1, mu, d);
  if (mu > 0) dfs(count + 1, result * nums[count + 1], p, mi, mu - 1, d);
  if (d > 0) {
    const newResult = result < 0 ? divideNegative(result, nums[count + 1]) : Math.floor(result / nums[count + 1]);
    dfs(count + 1, newResult, p, mi, mu, d - 1);
  }
}

function divideNegative(n1, n2) {
  return Math.floor((n1 * -1) / n2) * -1;
}

console.log(`${maxValue} \n${minValue}`);