function solution(info, edges) {
    const tree = Array.from({length: info.length}, () => []);
    edges.forEach(([parent, child]) => tree[parent].push(child));

    let answer = 1;
    const maxSheep = info.filter(x => !x).length;

    function dfs(sheep, wolf, toVisit) {
        if (sheep > answer) answer = sheep;
        if (answer === maxSheep) return;
        for (let parent of toVisit) {
            for (let child of tree[parent]) {
                if (wolf + info[child] >= sheep || toVisit.includes(child)) continue;
                info[child] ? dfs(sheep, wolf + 1, [...toVisit, child]) : dfs(sheep + 1, wolf, [...toVisit, child]);
            }
        }
    }
    dfs(1, 0, [0]);

    return answer;
}