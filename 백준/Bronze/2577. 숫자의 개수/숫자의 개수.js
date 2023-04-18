const input = require('fs').readFileSync(0).toString().split('\n');
const result = (input[0] * input[1] * input[2]).toString();

for (let i = 0; i <= 9; i++) {
  console.log(result.split(i + '').length - 1);
}