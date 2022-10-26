function solution(n, computers) {
    let answer = 0;
    const isVisited = new Array(n).fill(false);
    function dfs(currCom) {
        isVisited[currCom] = true;
        for (const [i, v] of computers[currCom].entries()) {
            if (i === currCom || isVisited[i] || v === 0) continue;
            dfs(i);
        }
    }
    for (let i = 0; i < n; i++){
        if (isVisited[i]) continue;
        dfs(i);
        answer++;
    }
    return answer;
}