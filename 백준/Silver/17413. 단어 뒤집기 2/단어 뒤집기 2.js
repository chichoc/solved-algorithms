const inputs = require('fs').readFileSync(0).toString().trim();
const answer = [];
const stack = [];
const inputLength = inputs.length;
let idx = 0;
let tag = '';

while (idx < inputLength) {
  if (inputs[idx] === '<') {
    if (stack.length > 0) {
      answer.push(reverseWord(stack));
      stack.length = 0;
    }
    const slash = inputs.indexOf('>', idx);
    answer.push(inputs.slice(idx, slash + 1));
    idx = slash + 1;
  } else if (inputs[idx] === ' ') {
    answer.push(reverseWord(stack), ' ');
    stack.length = 0;
    idx++;
  } else {
    stack.push(inputs[idx]);
    idx++;
  }
}

answer.push(tag, reverseWord(stack));

function reverseWord(wordArray) {
  return wordArray.reverse().join('');
}

console.log(answer.join(''));