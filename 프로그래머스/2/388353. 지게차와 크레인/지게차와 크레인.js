function solution(storage, requests) {
    let removing = 0;
    const board = storage.map(row => [...row]);
    const rowLen = storage.length, colLen = storage[0].length;
    const drow = [-1, 1, 0, 0], dcol = [0, 0, -1, 1];

    function isOver(row, col) {
        return row < 0 || row >= rowLen || col < 0 || col >= colLen;
    }

    function getAccessiblePositions() {
        const visited = Array.from({ length: rowLen }, () => Array(colLen).fill(false));
        const queue = [];

        for (let r = 0; r < rowLen; r++) {
            for (let c = 0; c < colLen; c++) {
                if ((r === 0 || r === rowLen - 1 || c === 0 || c === colLen - 1) && board[r][c] === '.') {
                    visited[r][c] = true;
                    queue.push([r, c]);
                }
            }
        }

        while (queue.length) {
            const [r, c] = queue.shift();
            for (let i = 0; i < 4; i++) {
                const nr = r + drow[i], nc = c + dcol[i];
                if (isOver(nr, nc)) continue;
                if (!visited[nr][nc] && board[nr][nc] === '.') {
                    visited[nr][nc] = true;
                    queue.push([nr, nc]);
                }
            }
        }
        return visited;
    }

    for (const request of requests) {
        if (request.length === 1) {
            const accessibleSpaces = getAccessiblePositions();

            for (let row = 0; row < rowLen; row++) {
                for (let col = 0; col < colLen; col++) {
                    if (board[row][col] === request) {
                        let accessible = false;
                        for (let i = 0; i < 4; i++) {
                            const nr = row + drow[i], nc = col + dcol[i];
                            if (isOver(nr, nc)) {
                                accessible = true;
                                break;
                            }
                            if (accessibleSpaces[nr][nc]) {
                                accessible = true;
                                break;
                            }
                        }
                        if (!accessible && (row === 0 || row === rowLen - 1 || col === 0 || col === colLen - 1)) {
                            accessible = true;
                        }

                        if (accessible) {
                            board[row][col] = '.';
                        }
                    }
                }
            }
        } else {
            for (let row = 0; row < rowLen; row++) {
                for (let col = 0; col < colLen; col++) {
                    if (board[row][col] === '.' || !request.includes(board[row][col])) continue;
                    board[row][col] = '.';
                }
            }
        }
    }

    let remain = 0;
    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            if (board[row][col] !== '.') remain++;
        }
    }
    return remain;
}
