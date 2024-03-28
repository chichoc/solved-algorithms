const brackets = require('fs').readFileSync(0).toString().trim();
let answer = 0;
let couple = 0;

for (let i = 0; i < brackets.length; i++) {
  if (brackets[i] === '(') couple++;
  else if (brackets[i] === ')') {
    if (brackets[i - 1] === '(') {
      couple--;
      if (couple > 0) answer += couple;
    } else if (brackets[i - 1] === ')') {
      answer++;
      couple--;
    }
  }
}

console.log(answer);