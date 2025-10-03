function solution(n, paths, gates, summits) {
    const graph = Array.from({length: n + 1}, _ => []);
    paths.forEach(([i, j, w]) => (graph[i].push([j, w]), graph[j].push([i, w])));
    summits.forEach(summit => graph[summit] = []);
    
    let queue = gates;
    const intensities = Array.from({length: n + 1}, _ => 10000001);
    gates.forEach(g => intensities[g] = 0);
    
    while(queue.length > 0) {
        const nextQueue = [];
        for (const node of queue) {
            for (const [v, w] of graph[node]){
                const maxV = Math.max(intensities[node], w)
                if (intensities[v] > maxV){
                    intensities[v] = maxV;
                    nextQueue.push(v)
                }   
            }
        }
        queue = [...nextQueue];
    }
    
    return summits.map(s => [s, intensities[s]]).sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1])[0];
}