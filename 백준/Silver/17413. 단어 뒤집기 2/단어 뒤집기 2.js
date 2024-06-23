const inputs = require('fs').readFileSync(0).toString().trim();
const answer = [];
const stack = [];
const inputLength = inputs.length;
let idx = 0;

while (idx < inputLength) {
  if (inputs[idx] === '<') {
    if (stack.length > 0) {
      answer.push(reverseWord(stack));
      stack.length = 0;
    }
    const closingBraceIdx = inputs.indexOf('>', idx);
    answer.push(inputs.slice(idx, closingBraceIdx + 1));
    idx = closingBraceIdx + 1;
    continue;
  }

  if (inputs[idx] === ' ') {
    answer.push(reverseWord(stack), ' ');
    stack.length = 0;
  } else {
    stack.push(inputs[idx]);
  }
  idx++;
}
answer.push(reverseWord(stack));

function reverseWord(wordArray) {
  return wordArray.reverse().join('');
}

console.log(answer.join(''));