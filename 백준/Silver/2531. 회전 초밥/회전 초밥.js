const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, d, k, c] = inputs[0].split(' ').map(Number);
const dishes = inputs.slice(1).map(Number);
const eating = Array(d + 1).fill(0);
let count = 0;
let answer = 0;

for (let i = 0; i < k; i++) {
  if (eating[dishes[i]]++ === 0) count++;
}
answer = count + (eating[c] ? 0 : 1);

for (let i = 0; i < N; i++) {
  const endIdx = (i + k) % N;

  if (--eating[dishes[i]] === 0) count--;
  if (eating[dishes[endIdx]]++ === 0) count++;
  
  answer = Math.max(answer, count + (eating[c] ? 0 : 1));
}

console.log(answer);