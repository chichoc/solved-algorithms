const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0];
const nums = inputs.slice(1).map((num) => num.split(' ').map(Number));
let answer = '';

for (let i = 0; i < N; i++) {
  const [currX, currY] = nums[i];
  let rank = 0;
  for (const [x, y] of nums) {
    if (currX < x && currY < y) rank++;
  }
  answer += `${rank + 1} `;
}

console.log(answer.trimEnd());