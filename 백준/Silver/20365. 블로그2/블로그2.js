const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const string = inputs[1];
let countB = 0,
  countR = 0;
let flag = false;

let prev = '';

for (const char of string) {
  if (char === prev) continue;
  else {
    if (char === 'B') countB++;
    else countR++;
    prev = char;
  }
}
console.log(Math.min(countB, countR) + 1);