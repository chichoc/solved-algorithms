const N = +require('fs').readFileSync(0).toString().trim();
let prev1 = 0;
let prev2 = 1;
let curr = 0;

for (let i = 0; i < N; i++) {
  curr = (prev1 + prev2) % 15746;
  [prev1, prev2] = [prev2, curr];
}

console.log(curr);