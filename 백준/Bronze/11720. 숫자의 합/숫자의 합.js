const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

const [N, nums] = input;
let answer = 0;

for (let i = 0; i < N; i++) {
  answer += +nums[i];
}

console.log(answer);
