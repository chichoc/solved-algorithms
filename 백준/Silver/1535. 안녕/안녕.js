const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0];
const minus = inputs[1].split(' ').map(Number);
const plus = inputs[2].split(' ').map(Number);
let maxJoy = 0;

for (let i = 0; i < N; i++) {
  dfs(i, 100 - minus[i], plus[i]);
}

function dfs(idx, hp, joy) {
  if (hp <= 0) return;
  maxJoy = Math.max(joy, maxJoy);
  for (let i = idx + 1; i < N; i++) {
    dfs(i, hp - minus[i], joy + plus[i]);
  }
}

console.log(maxJoy);