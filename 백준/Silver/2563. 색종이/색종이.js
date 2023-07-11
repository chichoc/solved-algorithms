const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0];
const nums = inputs.slice(1).map((num) => num.split(' ').map(Number));
const blackSpace = Array.from({ length: 100 }, () => Array(100).fill(false));
let answer = 0;

for (let i = 0; i < N; i++) {
  const [startX, startY] = nums[i];
  for (let x = startX; x < startX + 10; x++) {
    for (let y = startY; y < startY + 10; y++) {
      if (blackSpace[x][y]) continue;
      blackSpace[x][y] = true;
      answer++;
    }
  }
}

console.log(answer);
