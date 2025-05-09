const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, K] = inputs[0].split(' ').map(Number);
const nums = inputs[1].split(' ').map(Number);

const count = Array(100001).fill(0);
let left = 0;
let right = 0;
let maxLen = 0;

while (right < N) {
  if (count[nums[right]] + 1 <= K) {
    count[nums[right]]++;
    right++;
  } else {
    count[nums[left]]--;
    left++;
  }

  maxLen = Math.max(maxLen, right - left);
}

console.log(maxLen);