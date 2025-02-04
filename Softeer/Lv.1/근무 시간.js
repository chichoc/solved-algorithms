const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
let answer = 0;

function countMinute(h, m) {
  return h * 60 + m;
}

for (const input of inputs) {
  const [startTime, endTime] = input.split(' ');
  const [startHour, startMinute] = startTime.split(':').map(Number);
  const [endHour, endMinute] = endTime.split(':').map(Number);
  answer += countMinute(endHour, endMinute) - countMinute(startHour, startMinute);
}

console.log(answer);
