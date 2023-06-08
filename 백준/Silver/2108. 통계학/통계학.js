const inputs = require('fs').readFileSync(0).toString().trim().split('\n');

const nums = inputs.slice(1).map(Number);
const N = +inputs[0];
const count = new Map();
const answer = [];

// 산술평균
answer.push(Math.round(nums.reduce((sum, curr) => sum + curr, 0) / N));

// 중앙값
nums.sort((a, b) => a - b);
answer.push(nums[~~(N / 2)]);

// 최빈값
for (const num of nums) {
  count.set(num, (count.get(num) || 0) + 1);
}
const sortedCount = [...count].sort((a, b) => b[1] - a[1]);
answer.push(sortedCount.length > 1 && sortedCount[0][1] === sortedCount[1][1] ? sortedCount[1][0] : sortedCount[0][0]);

// 범위
answer.push(nums[N - 1] - nums[0]);

console.log(answer.join('\n'));