const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0];
const dws = inputs.slice(1).map((input) => input.split(' ').map(Number));
const sortedDws = dws.sort((a, b) => b[1] - a[1] || a[0] - b[0]);
const worked = Array(N + 1).fill(false);
let answer = 0;

for (let i = 0; i < N; i++) {
  const [d, w] = sortedDws[i];
  for (let j = d; j > 0; j--) {
    if (!worked[j]) {
      worked[j] = true;
      answer += w;
      break;
    }
  }
}

console.log(answer);