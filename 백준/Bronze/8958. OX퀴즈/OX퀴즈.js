const [N, ...results] = require('fs').readFileSync(0).toString().trim().split('\n');

for (const result of results) {
  add(result);
}

function add(str) {
  let sum = 0;
  let i = 0;
  for (const char of str) {
    if (char === 'O') sum += ++i;
    else i = 0;
  }
  console.log(sum);
}
