const N = require('fs').readFileSync(0).toString().trim();
const nToString = N.split('').map(Number);
const digits = Array(10).fill(0);
let answer = 0;

for (const num of nToString) {
  if (digits[num] < answer) {
    digits[num]++;
  } else {
    if (num === 6 && digits[9] < answer) {
      digits[9]++;
    } else if (num === 9 && digits[6] < answer) {
      digits[6]++;
    } else {
      answer++;
      digits[num] = answer;
    }
  }
}

console.log(answer);