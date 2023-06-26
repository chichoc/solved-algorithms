const [N, L] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
const answer = [];
let sum = 0;

for (let i = Math.ceil(N / 2); i >= 0; i--) {
  answer.push(i);
  sum += i;
  if (answer.length >= L && sum === N)
    return console.log(`${answer.length > 100 ? -1 : answer.sort((a, b) => a - b).join(' ')}`);
  if (i > 1 && sum >= N) sum -= answer.shift();
}

console.log(-1);