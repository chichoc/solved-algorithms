const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0];
const nums = inputs[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const answerNums = [];
let answerSum = Infinity;

for (let i = 0; i < N - 2; i++) {
  let left = i + 1;
  let right = N - 1;

  while (left < right) {
    const sum = nums[i] + nums[left] + nums[right];
    if (Math.abs(sum) < Math.abs(answerSum)) {
      answerNums.length = 0;
      answerNums.push(nums[i], nums[left], nums[right]);
      answerSum = sum;
    }
    if (sum < 0) left++;
    else right--;
  }
}

console.log(answerNums.join(' '));