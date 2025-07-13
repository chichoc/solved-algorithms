const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0];
const nums = inputs[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const answerNums = [];
let answerSum = Infinity;

for (let i = 0; i < N - 2; i++) {
  const num1 = nums[i];
  let left = i + 1;
  let right = N - 1;

  while (left < right) {
    const num2 = nums[left], num3 = nums[right];
    const sum = num1 + num2 + num3;
    if (Math.abs(sum) < Math.abs(answerSum)) {
      answerNums.length = 0;
      answerNums.push(num1, num2, num3);
      answerSum = sum;
    }
    if (sum === 0) break;
    else if (sum < 0) left++;
    else right--;
  }
  if (answerSum === 0) break;
}

console.log(answerNums.join(' '));
