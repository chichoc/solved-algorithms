const [X, Y] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
const prevWinning = calculatePercent(Y, X);
let left = 1;
let right = 1000000000;
let answer = Infinity;

if (prevWinning >= 99) return console.log(-1);

while (left <= right) {
  let mid = ~~((left + right) / 2);
  if (calculatePercent(Y + mid, X + mid) === prevWinning) left = mid + 1;
  else {
    answer = Math.min(answer, mid);
    right = mid - 1;
  }
}
console.log(answer === Infinity ? -1 : answer);

function calculatePercent(a, b) {
  return ~~(100 * a / b);
}