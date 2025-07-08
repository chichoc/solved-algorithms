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
    const [cost, node] = pq.shift();
    if (dist[node] < cost) continue;

    for (const [nextNode, weight] of graph[node]) {
      const nextCost = dist[node] + weight;
      if (nextCost >= dist[nextNode]) continue;
      dist[nextNode] = nextCost;
      pq.push([nextCost, nextNode]);
    }
  }
  return dist;
}

const distFromStart = dijkstra(0);
const distFromP = dijkstra(P - 1);

console.log(distFromStart[V - 1] === distFromStart[P - 1]+ distFromP[V - 1] ? 'SAVE HIM' : 'GOOD BYE');