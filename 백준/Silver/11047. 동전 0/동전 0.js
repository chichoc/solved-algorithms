const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const coins = inputs.slice(1).map(Number);
let [N, K] = inputs[0].split(' ').map(Number);
let answer = 0;

while (K > 0) {
  if (K < coins[--N]) continue;
  answer += Math.floor(K / coins[N]);
  K %= coins[N];
}

console.log(answer);