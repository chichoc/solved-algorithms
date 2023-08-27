const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const words = inputs.slice(1);
let answer = 0;

for (const word of words) {
  if (checkGroup(word)) answer++;
}

function checkGroup(string) {
  const checkedChar = [];
  for (const char of string) {
    if (checkedChar.includes(char) && checkedChar.pop() !== char) return false;
    checkedChar.push(char);
  }
  return true;
}

console.log(answer);