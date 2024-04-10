const inputs = require('fs').readFileSync(0).toString().trim().split('\n')
const [N, M] = inputs[0].split(' ').map(Number);
const K = +inputs[N + 1];
const array = [];
const answer = [];

for (let i = 1; i <= N; i++) {
  array.push(inputs[i].split(' ').map(Number));
}

for (let idx = N + 2; idx <= N + 1 + K; idx++) {
  const [i, j, x, y] = inputs[idx].split(' ').map(Number);
  answer.push(sum(i, j, x, y));
}

function sum(i, j, x, y) {
  let result = 0;
  for (let row = i; row <= x; row++) {
    for (let col = j; col <= y; col++) {
      result += array[row - 1][col - 1];
    }
  }
  return result;
}

console.log(answer.join('\n'));