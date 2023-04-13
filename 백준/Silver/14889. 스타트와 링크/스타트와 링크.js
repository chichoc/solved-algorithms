const input = require('fs').readFileSync(0).toString().split('\n');
const N = +input[0];
const skills = [];
const allNums = [...Array(N).keys()];
let minDiff = 100;

for (let i = 1; i < N + 1; i++) {
  skills.push(input[i].split(' ').map(Number));
}

function teamCompare(arr1, arr2) {
  let score1 = 0;
  let score2 = 0;

  for (let i = 0; i < arr1.length - 1; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
      score1 += skills[arr1[i]][arr1[j]] + skills[arr1[j]][arr1[i]];
      score2 += skills[arr2[i]][arr2[j]] + skills[arr2[j]][arr2[i]];
    }
  }
  return Math.abs(score1 - score2);
}

function dfs(nums) {
  if (nums.length === N / 2) {
    const rest = allNums.filter((key) => !nums.includes(key));
    const diff = teamCompare(nums, rest);
    if (minDiff > diff) minDiff = diff;
  }
  const lastNum = nums[nums.length - 1];
  for (let i = lastNum + 1; i < N; i++) {
    if (nums.includes(i)) continue;
    dfs([...nums, i]);
  }
}

dfs([0]);

console.log(minDiff);