const input = +require('fs').readFileSync(0).toString(); //제출용

let num = input;
let sum = 0;
let count = 0;

while (input !== num || count === 0) {
  count++;

  sum = ~~(num / 10) + (num % 10);
  num = (num % 10) * 10 + (sum % 10);
}

console.log(count);