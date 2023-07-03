const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const [K, N] = inputs[0].split(' ').map(Number);
const cables = inputs.slice(1).map(Number);
let maxLength = 0;
let numberOfCables = 0;
let start = 0;
let end = Math.max(...cables);
let mid = 0;

while (start <= end) {
  mid = Math.floor((start + end) / 2);
  numberOfCables = count(mid);
  if (numberOfCables >= N) {
    maxLength = mid;
    start = mid + 1;
  } else end = mid - 1;
}

console.log(maxLength);

function count(length) {
  let result = 0;
  for (const cable of cables) {
    result += Math.floor(cable / length);
  }
  return result;
}