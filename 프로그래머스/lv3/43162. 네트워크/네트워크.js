function solution(n, computers) {
    let answer = 0;
    const info = computers.map((c, i) => [...findConnectIdx(c, i)])
    const isVisited = new Array(n).fill(false);
    function dfs(currCom) {
        isVisited[currCom] = true;
        for (const v of info[currCom]) {
            if (isVisited[v]) continue;
            dfs(v);
        }
    }
    for (let i = 0; i < n; i++){
        if (isVisited[i]) continue;
        dfs(i);
        answer++;
    }
    return answer;
}

function findConnectIdx(arr, currNode) {
    const connectedIdxs = [];
    for (const [idx, elem] of arr.entries()){
        if (currNode === idx) continue;
        elem === 1 && connectedIdxs.push(idx);
    }
    return connectedIdxs;
}