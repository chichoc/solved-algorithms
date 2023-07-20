const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0];
const numberOfTitle = {};

for (let i = 1; i <= N; i++) {
  const title = inputs[i];
  if (numberOfTitle[title]) numberOfTitle[title]++;
  else numberOfTitle[title] = 1;
}

const sortedNumberOfTitle = Object.entries(numberOfTitle).sort(([t1, n1], [t2, n2]) => n2 - n1 || t1.localeCompare(t2));

console.log(sortedNumberOfTitle[0][0]);