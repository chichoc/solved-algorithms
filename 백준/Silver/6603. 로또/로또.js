const inputs = require('fs').readFileSync(0).toString().trim().split('\n');

let answer = '';

for (const string of inputs) {
  if (string === '0') break;
  findCases(string.split(' '));
  answer += '\n';
}

function findCases([k, ...S]) {
  for (let i = 0; i < k - 5; i++) {
    combination([i], k, S);
  }
}

function combination(arr, k, S) {
  if (arr.length === 6) {
    arr.forEach((idx) => (answer += `${S[idx]} `));
    return (answer += '\n');
  }
  for (let i = arr[arr.length - 1] + 1; i < k; i++) {
    combination([...arr, i], k, S);
  }
}

console.log(answer.trimEnd());