function solution(info, edges) {
    const tree = Array.from({length: info.length}, () => []);
    edges.forEach(([start, end]) => tree[start].push(end));
    
    let answer = 1;
    const maxSheep = info.filter(x => !x).length;
    
    function dfs(curr, {sheep, wolf}, toVisit) {
        info[curr] ? wolf++ : sheep++;
        if (sheep <= wolf) return;
        if (sheep > answer) answer = sheep;
        if (answer === maxSheep) return;
        toVisit.push(...tree[curr]);
        toVisit.forEach(v => dfs(v, {sheep, wolf}, toVisit.filter(x => x !== v)));
        return;
    }
    dfs(0, {sheep: 0, wolf: 0}, []);
    
    return answer;
}
    