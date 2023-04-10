const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

const [N, A, M, nums] = input;
const a = A.split(' ')
  .sort((a, b) => a - b)
  .map(Number);

function binarySearch(target, start, end) {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (a[mid] === target) return 1;
    else if (a[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return 0;
}

console.log(
  nums
    .split(' ')
    .map((num) => binarySearch(+num, 0, N - 1))
    .join('\n')
);