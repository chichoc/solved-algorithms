function solution(board, moves) {
    let result = 0;
    const basket = [];
    
    moves.forEach(m => {
        for (let i = 0; i < board.length; i++) {
            const pick = board[i][m - 1];
            if (pick === 0) continue;
            if (basket[basket.length - 1] !== pick) basket.push(pick);
            else {
                result += 2;
                basket.pop();
            }
            board[i][m - 1] = 0;
            break;
        }
    })
    return result;
}