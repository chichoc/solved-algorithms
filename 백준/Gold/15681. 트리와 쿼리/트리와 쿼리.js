const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, R, Q] = inputs[0].split(' ').map(Number);
const lines = inputs.slice(1, N);
const queries = inputs.slice(N);
const tree = Array.from({ length: N + 1 }, () => []);
const count = Array(N + 1).fill(0);
const answer = [];
const visited = Array(N + 1).fill(false);

function find(node) {
  visited[node] = true;
  count[node] = 1;

  for (const child of tree[node]) {
    if (visited[child]) continue;
    count[node] += find(child);
  }
  return count[node];
}

for (const line of lines) {
  const [a, b] = line.split(' ').map(Number);
  tree[a].push(b);
  tree[b].push(a);
}

find(R);

for (const query of queries) {
  answer.push(count[query]);
}

console.log(answer.join('\n'));