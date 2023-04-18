const input = require('fs').readFileSync(0).toString().split('\n');
const count = Array(10).fill(0);

const result = Array.from(String(input[0] * input[1] * input[2]), Number);
result.forEach((digit) => count[digit]++);

console.log(count.join('\n'));
