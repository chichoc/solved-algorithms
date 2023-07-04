const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const L = +inputs[0];
const S = inputs[1].split(' ').map(Number);
const n = +inputs[2];
let start = 0;
let end = 0;

S.sort((a, b) => a - b);

if (n < S[0]) {
  start = 1;
  end = S[0] - 1;
} else {
  for (let i = 1; i < L; i++) {
    if (S[i - 1] === n || S[i] === n) break;
    else if (n < S[i]) {
      start = S[i - 1] + 1;
      end = S[i] - 1;
      break;
    }
  }
}

function count(s, e) {
  let answer = 0;
  for (let j = s; j <= n; j++) {
    if (j < n) answer += e - j - (n - 1 - j);
    else answer += e - j;
  }
  return answer;
}

console.log(start === 0 ? 0 : count(start, end));