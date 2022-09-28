function solution(board, skill) {
    let answer = 0;
    const newBoard = Array.from({length: board.length + 2}, () => Array.from({length: board[0].length + 2}, () => 0))
    
    for (let [type, r1, c1, r2, c2, deg] of skill) {
        if (type === 1) deg = -deg;
        newBoard[r1 + 1][c1 + 1] += deg;
        newBoard[r2 + 2][c1 + 1] -= deg;
        newBoard[r1 + 1][c2 + 2] -= deg;
        newBoard[r2 + 2][c2 + 2] += deg;
    }
    
    for(let i = 1; i <= board.length; i++) {
        for (let j = 1; j <= board[0].length; j++) {
            newBoard[i][j] = newBoard[i][j] + newBoard[i - 1][j] + newBoard[i][j - 1] - newBoard[i - 1][j - 1];
            board[i - 1][j - 1] += newBoard[i][j];
            if (board[i - 1][j - 1] >= 1) answer++;
        }
    }
    return answer;
}