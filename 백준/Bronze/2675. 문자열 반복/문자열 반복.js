const [T, ...cases] = require('fs').readFileSync(0).toString().trim().split('\n');

for (let i = 0; i < T; i++) {
  let result = '';
  const [R, S] = cases[i].split(' ');

  for (const char of S) {
    result += char.repeat(R);
  }

  console.log(result);
}