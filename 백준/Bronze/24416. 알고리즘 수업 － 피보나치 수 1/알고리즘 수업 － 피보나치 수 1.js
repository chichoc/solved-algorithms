const fs = require('fs');
const input = fs.readFileSync(0).toString().split(' ');

const n = +input[0];
const nums = [0, 1];

for (let i = 1; i < n; i++) {
  nums.push(nums[nums.length - 1] + nums[nums.length - 2]);
}

console.log(nums.pop(), n - 2);