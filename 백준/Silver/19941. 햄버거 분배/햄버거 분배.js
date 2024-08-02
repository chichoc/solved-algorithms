const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, K] = inputs[0].split(' ').map(Number);
const pos = inputs[1].split('');
let answer = 0;

for (let i = 0; i < N; i++) {
  if (pos[i] === 'P') {
    const start = i - K;
    const end = i + K;

    for (let j = start; j <= end; j++) {
      if (pos[j] === 'H') {
        answer += 1;
        pos[j] = 'D';
        break;
      }
    }
  }
}

console.log(answer);