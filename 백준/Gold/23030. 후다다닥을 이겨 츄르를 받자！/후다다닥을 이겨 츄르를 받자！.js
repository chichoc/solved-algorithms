const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0];
const station = inputs[1].split(' ').map(Number);
const M = +inputs[2];
const transfer = inputs.slice(3, 3 + M).map((input) => input.split(' ').map(Number));
const K = +inputs[3 + M];
const users = inputs.slice(4 + M).map((input) => input.split(' ').map(Number));
let idx = 0;
const nodeMap = [];

for (let i = 0; i < N; i++) {
  nodeMap.push([]);
  for (let j = 0; j < station[i]; j++) {
    nodeMap[i][j] = idx++;
  }
}
const totalNodes = idx;
const graph = Array.from({ length: totalNodes }, () => []);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < station[i] - 1; j++) {
    const a = nodeMap[i][j];
    const b = nodeMap[i][j + 1];
    graph[a].push([b, 1]);
    graph[b].push([a, 1]);
  }
}

const transferList = [];
for (const [a, b, c, d] of transfer) {
  const n1 = a - 1,
    s1 = b - 1,
    n2 = c - 1,
    s2 = d - 1;
  transferList.push([nodeMap[n1][s1], nodeMap[n2][s2]]);
}

function dijkstra(start, end, transferCost) {
  const dist = Array(totalNodes).fill(Infinity);
  dist[start] = 0;
  const pq = [[0, start]];
  
  while (pq.length) {
    pq.sort((a, b) => a[0] - b[0]);
    const [cost, node] = pq.shift();
    if (dist[node] < cost) continue;
    for (const [next, weight] of graph[node]) {
      if (dist[next] > dist[node] + weight) {
        dist[next] = dist[node] + weight;
        pq.push([dist[next], next]);
      }
    }

    for (const [a, b] of transferList) {
      if (node === a && dist[b] > dist[node] + transferCost) {
        dist[b] = dist[node] + transferCost;
        pq.push([dist[b], b]);
      }
      if (node === b && dist[a] > dist[node] + transferCost) {
        dist[a] = dist[node] + transferCost;
        pq.push([dist[a], a]);
      }
    }
  }
  return dist[end];
}

for (const [t, u1, u2, v1, v2] of users) {
  const start = nodeMap[u1 - 1][u2 - 1];
  const end = nodeMap[v1 - 1][v2 - 1];
  const answer = dijkstra(start, end, t);
  console.log(answer);
}