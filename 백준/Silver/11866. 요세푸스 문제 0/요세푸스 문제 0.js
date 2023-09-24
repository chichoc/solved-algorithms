const [N, K] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
const answer = [];
const nums = Array.from({ length: N }, (_, i) => i + 1);
let idx = K - 1;

while (nums.length) {
  answer.push(nums.splice(idx, 1)[0]);
  idx = (idx + K - 1) % nums.length;
}

console.log(`<${answer.join(', ')}>`);