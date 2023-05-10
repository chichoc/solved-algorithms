const num = +require('fs').readFileSync(0).toString().trim();

let answer = 1;

for (let i = 1; i < num + 1; i++) {
  answer *= i;
}
console.log(answer);