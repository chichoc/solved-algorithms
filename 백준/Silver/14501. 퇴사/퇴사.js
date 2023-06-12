const inputs = require('fs').readFileSync(0).toString().trim().split('\n');

const N = +inputs[0];
const works = [null];
let maxP = 0;

inputs.slice(1).forEach((input, idx) => {
  const [t, p] = input.split(' ').map(Number);
  works.push([idx + t + 1, p]);
});

function dfs(workableDate, sumOfPay) {
  if (workableDate > N + 1) return;
  if (sumOfPay > maxP) maxP = sumOfPay;
  for (let j = workableDate; j < N + 1; j++) {
    dfs(works[j][0], sumOfPay + works[j][1]);
  }
}

for (let i = 1; i < N + 1; i++) {
  dfs(...works[i]);
}

console.log(maxP);