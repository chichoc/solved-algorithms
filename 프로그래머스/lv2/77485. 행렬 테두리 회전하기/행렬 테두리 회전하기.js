function solution(rows, columns, queries) {
    const answer = [];
    const matrix = Array.from({length: rows}, () => Array(columns));
    
    // 행렬 초기화
    let num = 0;
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            matrix[row][col] = ++num;
        }
    }
    
    // 회전
    for (const query of queries) {
        answer.push(rotate(...query, matrix))
    }
    
    return answer;
}

function rotate(x1, y1, x2, y2, array) {
        --x1, --y1, --x2, --y2;
        const numToMove = [];
        for (let col = y1; col < y2; col++) numToMove.push(array[x1][col]);
        for (let row = x1; row < x2; row++) numToMove.push(array[row][y2]);
        for (let col = y2; col > y1; col--) numToMove.push(array[x2][col]);
        for (let row = x2; row > x1; row--) numToMove.push(array[row][y1]);
        
        numToMove.unshift(numToMove.pop());
        const minNum = Math.min(...numToMove)
        
        for (let col = y1; col < y2; col++) array[x1][col] = numToMove.shift();
        for (let row = x1; row < x2; row++) array[row][y2] = numToMove.shift();
        for (let col = y2; col > y1; col--) array[x2][col] = numToMove.shift();
        for (let row = x2; row > x1; row--) array[row][y1] = numToMove.shift();
        
        return minNum;
}