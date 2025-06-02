const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0];
const A = inputs[1].split(' ').map(Number);
const B = inputs[2].split(' ').map(Number);

function checkArraySame(array1, array2) {
  return array1.every((elem1, idx) => elem1 === array2[idx]);
}

for (let i = 1; i < N; i++) {
  loc = i - 1;
  const newItem = A[i];

  while (0 <= loc && A[loc] > newItem) {
    A[loc + 1] = A[loc];
    loc--;
    if (checkArraySame(A, B)) return console.log(1);
  }
  if (loc + 1 !== i) A[loc + 1] = newItem;
  if (checkArraySame(A, B)) return console.log(1);
}

console.log(0);