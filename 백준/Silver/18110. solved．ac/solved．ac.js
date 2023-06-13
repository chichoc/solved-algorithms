const inputs = require('fs').readFileSync(0).toString().trim().split('\n');

const n = +inputs[0];
const scores = inputs
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);
const numeToExclude = Math.round(n * 0.15);
const numOfAverage = n - numeToExclude * 2;
let level = 0;

calculate();
console.log(level);

function calculate() {
  if (numOfAverage < 1) return;
  const excludedScroes = scores.slice(numeToExclude, n - numeToExclude);
  level = Math.round(excludedScroes.reduce((sum, score) => sum + score, 0) / numOfAverage);
}