// https://softeer.ai/practice/6254
const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
let answer = 0;

function countMinute(string) {
  const [h, m] = string.split(':').map(Number);
  return h * 60 + m;
}

for (const input of inputs) {
  const [startTime, endTime] = input.split(' ');
  answer += countMinute(endTime) - countMinute(startTime);
}

console.log(answer);
