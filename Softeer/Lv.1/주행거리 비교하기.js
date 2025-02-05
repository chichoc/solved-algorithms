// https://softeer.ai/practice/6253
const [A, B] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

function compare(num1, num2) {
  if (num1 > num2) return 'A';
  else if (num1 < num2) return 'B';
  else return 'same';
}

console.log(compare(A, B));
