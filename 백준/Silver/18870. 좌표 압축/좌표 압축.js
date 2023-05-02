const input = require('fs').readFileSync(0).toString().trim().split('\n');

const nums = input[1].split(' ').map(Number);
const set = new Set(nums);
const idxs = {};
let answer = '';

const sorting = [...set].sort((a, b) => a - b);
sorting.forEach((n, idx) => (idxs[n] = idx));
nums.forEach((num) => (answer += idxs[num] + ' '));

console.log(answer);