const [N, K] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
const nums = Array.from({ length: N }, (_, idx) => idx + 1);
let answer = '<';
let pos = -1;

for (let i = 0; i < N; i++) {
  pos += K;
  if (pos >= nums.length) pos %= nums.length;
  answer += `${nums[pos]}, `;
  nums.splice(pos, 1);
  pos--;
}
console.log(answer.slice(0, -2) + '>');
// 1234567
// 124567
// 12457
// 1457
// 145
// 14
// 1