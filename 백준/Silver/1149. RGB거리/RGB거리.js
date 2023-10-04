const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0];
const costs = inputs.slice(1).map((input) => input.split(' ').map(Number));

for (let i = 1; i < N; i++) {
  costs[i][0] += Math.min(costs[i - 1][1], costs[i - 1][2]);
  costs[i][1] += Math.min(costs[i - 1][0], costs[i - 1][2]);
  costs[i][2] += Math.min(costs[i - 1][0], costs[i - 1][1]);
}

console.log(Math.min(...costs[N - 1]));