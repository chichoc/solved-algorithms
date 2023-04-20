const input = Number(require('fs').readFileSync(0).toString());

let num = input;
let sum = 0;
let count = 0;

do {
  count++;
  sum = Math.floor(num / 10) + (num % 10);
  num = (num % 10) * 10 + (sum % 10);
} while (input !== num);

console.log(count);