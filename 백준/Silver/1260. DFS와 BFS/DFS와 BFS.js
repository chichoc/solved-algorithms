const input = require('fs').readFileSync(0).toString().trim().split('\n'); //제출용
const [N, M, V] = input[0].split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
const visitedDfs = Array(N + 1).fill(false);
const visitedBfs = Array(N + 1).fill(false);
const resultDfs = [];
const resultBfs = [];
const queueBfs = [V];

for (let i = 1; i <= M; i++) {
  const [num1, num2] = input[i].split(' ').map(Number);
  graph[num1].push(num2);
  graph[num2].push(num1);
}

graph.forEach((edges) => edges.sort((a, b) => a - b));

function dfs(num) {
  resultDfs.push(num);
  visitedDfs[num] = true;

  for (const numToMove of graph[num]) {
    if (visitedDfs[numToMove]) continue;
    dfs(numToMove);
  }
}
dfs(V);

// bfs
visitedBfs[V] = true;
while (queueBfs.length) {
  const num = queueBfs.shift();
  resultBfs.push(num);

  for (const numToMove of graph[num]) {
    if (visitedBfs[numToMove]) continue;
    queueBfs.push(numToMove);
    visitedBfs[numToMove] = true;
  }
}

console.log(resultDfs.join(' ') + '\n' + resultBfs.join(' '));
