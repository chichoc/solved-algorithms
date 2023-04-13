const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

const N = +input[0];
const skills = [];
let minDiff = 100;

for (let i = 1; i < N + 1; i++) {
  skills.push(input[i].split(' ').map(Number));
}

function getComb(arr, count) {
  const results = [];
  if (count === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getComb(rest, count - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });
  return results;
}

function sum(arr) {
  return getComb(arr, 2).reduce((sum, [n1, n2]) => sum + skills[n1][n2] + skills[n2][n1], 0);
}

const allNums = [...Array(N).keys()];
function bfs(nums) {
  if (nums.length === N / 2) {
    const rest = allNums.filter((key) => !nums.includes(key));
    const diff = Math.abs(sum(nums) - sum(rest));
    if (minDiff > diff) minDiff = diff;
  }
  const lastNum = nums[nums.length - 1];
  for (let i = lastNum + 1; i < N; i++) {
    if (nums.includes(i)) continue;
    bfs([...nums, i]);
  }
}

bfs([0]);

console.log(minDiff);