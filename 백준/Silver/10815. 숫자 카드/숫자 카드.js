const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0];
const takingNums = inputs[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const checkingNums = inputs[3].split(' ').map(Number);

function find(n) {
  let start = 0;
  let end = N - 1;
  let idx = 0;

  while (start <= end) {
    idx = ~~((start + end) / 2);
    if (takingNums[idx] === n) return true;
    else if (takingNums[idx] > n) end = idx - 1;
    else start = idx + 1;
  }
  return false;
}

console.log(checkingNums.map((num) => (find(num) ? 1 : 0)).join(' '));