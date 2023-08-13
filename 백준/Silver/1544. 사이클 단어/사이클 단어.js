const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const words = inputs.slice(1);
const checkedWords = new Set([]);
let answer = 0;

for (const word of words) {
  if (checkedWords.size > 0 && checkedWords.has(word)) continue;
  answer++;
  check(word);
}

function check(wordToCheck) {
  checkedWords.add(wordToCheck);
  for (let start = 0; start < wordToCheck.length; start++) {
    for (let count = 1; count < wordToCheck.length - start; count++) {
      const newWord =
        wordToCheck.slice(start + count) + wordToCheck.slice(0, start) + wordToCheck.slice(start, start + count);
      checkedWords.add(newWord);
    }
  }
}

console.log(answer);