function solution(n, computers) {
    let answer = 0;
    const isVisited = new Array(n).fill(false);
    function bfs(com) {
        isVisited[com] = true;
        const queue = [com];
        while (queue.length > 0) {
            currCom = queue.pop();
            isVisited[currCom] = true;
            for (let i = 0; i < n; i++) {
                if (isVisited[i] || computers[currCom][i] === 0) continue;
                queue.push(i);
            }
        }
    }
    for (let i = 0; i < n; i++){
        if (isVisited[i]) continue;
        bfs(i);
        answer++;
    }
    return answer;
}