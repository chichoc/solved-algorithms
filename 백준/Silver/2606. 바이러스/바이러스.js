const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const numberOfComputer = +inputs[0];
const numbers = inputs.slice(2).map((input) => input.split(' '));
const connections = Array.from({ length: numberOfComputer + 1 }, () => []);
const visited = Array(numberOfComputer + 1).fill(false);
let answer = 0;

for (const [n1, n2] of numbers) {
  connections[n1].push(n2);
  connections[n2].push(n1);
}

dfs(1);

function dfs(num) {
  visited[num] = true;
  answer++;

  for (const numToConenct of connections[num]) {
    if (visited[numToConenct]) continue;
    dfs(numToConenct);
  }
}

console.log(answer - 1);