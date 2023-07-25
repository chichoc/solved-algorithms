const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, M] = inputs[0].split(' ').map(Number);
const A = inputs.slice(1, 1 + N).map((nums) => [...nums].map(Number));
const B = inputs.slice(1 + N).map((nums) => [...nums].map(Number));
let answer = 0;

if (compare(A, B)) return console.log(answer);

for (let r = 0; r <= N - 3; r++) {
  for (let c = 0; c <= M - 3; c++) {
    if (A[r][c] === B[r][c]) continue;
    reverse(A, r, c);
    answer++;
    if (compare(A, B)) return console.log(answer);
  }
}

function reverse(arr, startRow, startCol) {
  for (let r = startRow; r < startRow + 3; r++) {
    for (let c = startCol; c < startCol + 3; c++) {
      arr[r][c] = arr[r][c] ? 0 : 1;
    }
  }
}

function compare(arr1, arr2) {
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < M; c++) {
      if (arr1[r][c] !== arr2[r][c]) return false;
    }
  }
  return true;
}

console.log(-1);