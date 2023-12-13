const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const t = +inputs[0];
const answer = [];
let start = 1;

for (let i = 0; i < t; i++) {
  const n = +inputs[start];
  const sorted = inputs.slice(start + 1, start + n + 1).sort();
  answer.push(checkConsistency(sorted) ? 'YES' : 'NO');
  start += n + 1;
}

function checkConsistency(arr) {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    if (arr[i].startsWith(arr[i - 1])) return false;
  }
  return true;
}

console.log(answer.join('\n'));