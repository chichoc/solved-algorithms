function solution(k, dungeons) {
    let answer = 0;
    const lenD = dungeons.length;
    const visited = Array(lenD).fill(0);
    
    function dfs(count, restK) {
        if (answer < count) answer = count;
        for (let i = 0; i < lenD; i++) {
            if (restK < dungeons[i][0] || visited[i]) continue;
            visited[i] = 1;
            dfs(count + 1, restK - dungeons[i][1]);
            visited[i] = 0;
        }
    }
    dfs(0, k);
    return answer;
}