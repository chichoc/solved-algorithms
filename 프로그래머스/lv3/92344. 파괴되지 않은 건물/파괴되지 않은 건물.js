function solution(board, skill) {
   const newBoard = [...Array(board.length).keys()].map(e => [...Array(board[0].length)].fill(0));
    skill.forEach(arr => effect(newBoard, arr));
    for(let i = 0; i < newBoard.length; i++) {
        for (let j = 1; j < newBoard.length; j++) {
            newBoard[i][j] += newBoard[i][j-1];
        }
    }
    
    for(let i = 0; i<newBoard.length; i++) {
        for (let j = 1; j<newBoard.length; j++) {
            newBoard[j][i] += newBoard[j-1][i];
        }
    }
    
    for(let i = 0; i < newBoard.length; i++) {
        for (let j = 0; j < newBoard.length; j++) {
            board[i][j] += newBoard[i][j];
        }
    }
    // 효율성 테스트 X
    // skill.forEach(arr => {
    //     const damage = arr[0] === 1 ? -arr[5] : arr[5];
    //     for (let i = Math.min(arr[1], arr[3]); i <= Math.max(arr[1], arr[3]); i++) {
    //      for (let j = Math.min(arr[2], arr[4]); j <= Math.max(arr[2], arr[4]); j++) {
    //          board[i][j] = board[i][j] + damage;
    //      }
    //     }
    // })
    return board.reduce((sum, arr) => sum + arr.filter(hp => hp > 0).length, 0)
}

function effect(board, skill) {
    const damage = skill[0] === 1 ? -skill[5] : skill[5];
    board[skill[1]][skill[2]] += damage;
    if (skill[4] + 1 < board[0].length) board[skill[1]][skill[4] + 1] -= damage;
    if (skill[3] + 1 < board.length) board[skill[3] + 1][skill[2]] -= damage;
    if (skill[4] + 1 < board[0].length && skill[3] + 1 < board.length) board[skill[3] + 1][skill[4] + 1] += damage;
}