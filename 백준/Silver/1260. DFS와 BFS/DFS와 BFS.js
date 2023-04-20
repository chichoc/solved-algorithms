const [input, ...connects] = require('fs').readFileSync(0).toString().trim().split('\n'); //제출용
const [N, M, V] = input.split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
const visitedDfs = Array(N + 1).fill(0);
const visitedBfs = Array(N + 1).fill(0);
const resultDfs = [];
const resultBfs = [];
const queueBfs = [V];

connects.forEach((connect) => {
  const [num1, num2] = connect.split(' ');
  graph[num1].push(num2);
  graph[num2].push(num1);
});

function dfs(num) {
  resultDfs.push(num);
  visitedDfs[num] = 1;
  graph[num].sort((a, b) => a - b);
  for (const numToMove of graph[num]) {
    if (visitedDfs[numToMove] === 1) continue;
    dfs(numToMove);
  }
}
dfs(V);

// bfs
while (queueBfs.length > 0) {
  const num = queueBfs.shift();
  if (visitedBfs[num] === 0) {
    resultBfs.push(num);
    visitedBfs[num] = 1;
  }
  for (const numToMove of graph[num]) {
    if (visitedBfs[numToMove] === 1) continue;
    queueBfs.push(numToMove);
  }
}

console.log(resultDfs.join(' ') + '\n' + resultBfs.join(' '));
