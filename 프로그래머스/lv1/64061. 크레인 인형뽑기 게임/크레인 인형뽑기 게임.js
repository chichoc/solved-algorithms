function solution(board, moves) {
    const column = [...Array(board[0].length).keys()].map(c => []);
    board.forEach(row => row.forEach((elem,index) => elem && column[index].push(elem)));
    let pop = 0;
    const basket = [];
    moves.forEach(c => {
        if (!column[c - 1].length) return;
        const doll = column[c - 1].shift();
        if (!basket.length) return basket.push(doll);
        if (doll !== basket.slice(-1)[0]) basket.push(doll);
        else {
            pop += 2;
            basket.pop();
        }
    })
    return pop;
}