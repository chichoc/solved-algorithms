const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, K] = inputs[0].split(' ').map(Number);
const nums = inputs[1].split(' ').map(Number);
const count = Array(100001).fill(0);
let set = [];
let maxLen = 0;

for (let i = 0; i < N; i++) {
  const targetNum = nums[i];
  set.push(targetNum);
  count[targetNum]++;

  while (count[targetNum] > K) {
    const adjacentNum = set.indexOf(targetNum);
    set.slice(0, adjacentNum + 1).forEach((num) => count[num]--);
    set = set.slice(adjacentNum + 1);
  }
  maxLen = Math.max(maxLen, set.length);
}

console.log(maxLen);