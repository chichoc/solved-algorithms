const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

let N = +input[0];
let answer = 0;

while (N > 2) {
  if (N % 5 === 0) N -= 5;
  else if (N % 3 === 0) N -= 3;
  else {
    if (N < 5) N -= 3;
    else N -= 5;
  }
  answer++;
}

console.log(N > 0 ? -1 : answer);