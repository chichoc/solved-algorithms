function solution(n, paths, gates, summits) {
    const answer = [];
    const nodesOfPath = Array.from({length: n + 1}, _ => []);
    paths.forEach(([i, j, w]) => {
        nodesOfPath[i].push([j, w]);
        nodesOfPath[j].push([i, w]);
    });
    
    for (const summit of summits) nodesOfPath[summit] = [];
    
    let queue = gates;
    const intensities = Array.from({length: n + 1}, _ => 100000000);
    gates.forEach(g => intensities[g] = -1);
    
    while(queue.length > 0) {
        let set = new Set();
        while(queue.length > 0) {
            const gateOfQueue = queue.pop();
            for (const [v, w] of nodesOfPath[gateOfQueue]){
                const maxV = Math.max(intensities[gateOfQueue], w)
                if (intensities[v] > maxV){
                    intensities[v] = maxV;
                    set.add(v);
                }   
            }
        }
        queue = [...set];
    }
    
    return summits.map(s => [s, intensities[s]]).sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1])[0];
}