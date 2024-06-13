const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const A = inputs[1].split(' ').map(Number);
const LIS = [];

for (const num of A) {
  if (LIS[LIS.length - 1] < num) {
    LIS.push(num);
  } else {
    LIS[binarySearch(num)] = num;
  }
}

function binarySearch(num) {
  let lt = 0;
  let rt = LIS.length - 1;

  while (lt <= rt) {
    let mid = ~~((lt + rt) / 2);

    if (LIS[mid] < num) lt = mid + 1;
    else if (LIS[mid] > num) rt = mid - 1;
    else return mid;
  }
  return lt;
}

console.log(LIS.length);