function solution(board, moves) {
    const transpose = board.reduce((result, row) => row.map((elem, i) => elem && [...(result[i] || []), elem]), []);
    transpose.map(row => row.reverse().filter(el => el));
    
    let result = 0;
    const basket = [];
    
    moves.forEach(c => {
        if (!transpose[c - 1].length) return;
        const doll = transpose[c - 1].pop();
        if (!basket.length) return basket.push(doll);
        if (doll !== basket[basket.length - 1]) basket.push(doll);
        else {
            result += 2;
            basket.pop();
        }
    })
    return result;
}