const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const tests = inputs.slice(1).map((str) => str.split(' ').map(Number));
const answer = [];

for (const [x1, y1, r1, x2, y2, r2] of tests) {
  const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  const rsum = r1 + r2;
  const rsub = Math.abs(r1 - r2);

  if (distance === 0 && rsub === 0) answer.push(-1);
  else if (distance > rsum || distance < rsub) answer.push(0);
  else if (distance === rsum || distance === rsub) answer.push(1);
  else answer.push(2);
}

console.log(answer.join('\n'));