const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const [docs, searching] = inputs;
let answer = 0;

for (let i = 0; i < docs.length; i++) {
  let numberOfWord = count(i);
  answer = Math.max(answer, numberOfWord);
}

function count(num) {
  let startIdx = num;
  let result = 0;

  while (startIdx < docs.length) {
    startIdx = docs.indexOf(searching, startIdx);
    if (startIdx === -1) break;
    result++;
    startIdx += searching.length;
  }
  return result;
}

console.log(answer);