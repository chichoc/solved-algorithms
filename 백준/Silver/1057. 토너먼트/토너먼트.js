let [N, num1, num2] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
let round = 1;

while (N > 1) {
  if (compare(num1, num2)) return console.log(round);
  round++;
  num1 = Math.ceil(num1 / 2);
  num2 = Math.ceil(num2 / 2);
  N = Math.ceil(N / 2);
}
console.log(-1);

function compare(n1, n2) {
  if (n1 < n2) return n1 + 1 === n2 && n2 % 2 === 0;
  else return n1 === n2 + 1 && n1 % 2 === 0;
}