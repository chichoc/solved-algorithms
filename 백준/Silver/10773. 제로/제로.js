const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const nums = inputs.slice(1).map(Number);
const stack = [];

for (const num of nums) {
  num === 0 ? stack.pop() : stack.push(num);
}

console.log(stack.reduce((sum, curr) => sum + curr, 0));