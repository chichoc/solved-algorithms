const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, M] = inputs[0].split(' ').map(Number);
const S = inputs.slice(1, N + 1);
const dict = {};
let answer = 0;

S.forEach((s) => (dict[s] = true));

for (let i = N + 1; i <= N + M; i++) {
  if (dict[inputs[i]]) answer++;
}

console.log(answer);