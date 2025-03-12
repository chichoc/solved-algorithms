function solution(land) {
    let answer = 0;
    const m = land[0].length;
    const n = land.length;
    const visited = Array.from({length: n}, () => Array(m).fill(null));
    const oilAmount = [];
    const dr = [0, 1, -1, 0];
    const dc = [1, 0, 0, -1];
    let visitedIdx = 0;
    let result = 0;
    
    function checkPossible(r, c) {
        if (r >= n || c >= m || r < 0 || c < 0) return false;
        return true;
    }
    
    function drillVertical(pos) {
        const result = new Set();
        for (let row = 0; row < n; row++) {
            if (visited[row][pos] === null) continue;
            result.add(visited[row][pos])
        }
        return [...result].reduce((sum, curr) => sum + oilAmount[curr], 0);
    }
    
    function findOilDfs(r, c, count) {
        const stack = [];
        stack.push([r, c]);
        
        while (stack.length > 0) {
            const [currR, currC] = stack.pop();
            if (visited[currR][currC] !== null) continue;
            visited[currR][currC] = visitedIdx;
            result++;
            
            for (let i = 0 ; i < 4; i++) {
                const nextR = currR + dr[i];
                const nextC = currC + dc[i];
                if (checkPossible(nextR, nextC) && land[nextR][nextC] === 1) {
                    stack.push([nextR, nextC])
                }
            }
        }
       
        // return count;
    }
    
    // 구역별 오일 확인
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            if (land[row][col] === 0 || visited[row][col] !== null) continue;
            result = 0;
            findOilDfs(row, col, 1);
            oilAmount.push(result);
            visitedIdx++;
        }
    }
     // console.log(visited, oilAmount)
    
    // 가로로 순회하며 석유 확인
    for (let col = 0; col < m; col++) {
        answer = Math.max(answer, drillVertical(col))
    }
    
    return answer;
}