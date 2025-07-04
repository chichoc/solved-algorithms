const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const [V, E, P] = inputs[0].split(' ').map(Number);
const graph = Array.from({ length: V }, () => []);

for (let i = 1; i <= E; i++) {
  const [a, b, c] = inputs[i].split(' ').map(Number);
  graph[a - 1].push([b - 1, c]);
  graph[b - 1].push([a - 1, c]);
}

function dijkstra(start) {
  const dist = Array(V).fill(Infinity);
  dist[start] = 0;
  const pq = [[0, start]];
  while (pq.length) {
    pq.sort((a, b) => a[0] - b[0]);
    const [cost, node] = pq.shift();
    if (dist[node] < cost) continue;
    for (const [nextNode, nextCost] of graph[node]) {
      if (dist[nextNode] <= dist[node] + nextCost) continue;
      dist[nextNode] = dist[node] + nextCost;
      pq.push([dist[nextNode], nextNode]);
    }
  }
  return dist;
}

const distFromStart = dijkstra(0);
const distFromP = dijkstra(P - 1);

const dist1toV = distFromStart[V - 1];
const dist1toP = distFromStart[P - 1];
const distPtoV = distFromP[V - 1];

console.log(dist1toV === dist1toP + distPtoV ? 'SAVE HIM' : 'GOOD BYE');