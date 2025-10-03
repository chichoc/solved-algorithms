function solution(n, paths, gates, summits) {
  const graph = Array.from({ length: n + 1 }, (_) => []);
  paths.forEach(([i, j, w]) => (graph[i].push([j, w]), graph[j].push([i, w])));
  summits.forEach((summit) => (graph[summit] = []));

  let queue = gates;
  const intensities = Array.from({ length: n + 1 }, (_) => 10000001);
  gates.forEach((g) => (intensities[g] = 0));

  while (queue.length > 0) {
    const nextQueue = new Set();
    for (const node of queue) {
      for (const [v, w] of graph[node]) {
        const maxV = Math.max(intensities[node], w);
        if (intensities[v] > maxV) {
          intensities[v] = maxV;
          nextQueue.add(v);
        }
      }
    }
    queue = [...nextQueue];
  }

  return summits.map((s) => [s, intensities[s]]).sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]))[0];
}
/** 
문제: 경로별 최대 시간이 가장 작은 경로 구하기
조건
- 출입구 동일
- 산봉우리는 한 번만
풀이
- 시간 오버하는 경우 조기 종료시킬 수 있는 BFS (DFS는 모든 경로 끝까지 탐색)
- 가는 길과 오는 길 같아도 상관없음 = 가는 길만 체크 
    (산봉우리는 큐에 포함하지 않아 해당 경로 탐색 종료 -> 큐에  포함하되 산봉우리 연결노드를 삭제 - 매번 includes로 탐색하는 비용이 예상보다 큼)
- visited 필요 X (시간이 작은 노드만 큐에 추가하므로 무한루프 발생하지 않음)
- 각 노드까지의 최소 intensity를 intensities[노드idx]에 저장 (그래서 출입구는 0으로 초기화)
- nextQueue는 매번 비교 후 추가하므로 중복될 일은 없지만 배열보다 set의 시간이 더 빨랐음 (추가하는 연산 뿐인데 의외)
*/
