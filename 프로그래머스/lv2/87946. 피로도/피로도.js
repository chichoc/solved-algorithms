function solution(k, dungeons) {
    let answer = 0;
    function bfs(toVisit, count, restK) {
        if (answer < count) answer = count;
        toVisit.forEach(v => {
            if (restK < v[0]) return;
            bfs(toVisit.filter(el => el !== v), count + 1, restK - v[1]);
        })
    }
    bfs(dungeons, 0, k);
    return answer;
}