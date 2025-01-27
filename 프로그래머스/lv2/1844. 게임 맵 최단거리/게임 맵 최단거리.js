function solution(maps) {
    const moves = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const [ax, ay] = [maps.length - 1, maps[0].length - 1];
    const queue = [[0, 0, 1]];
    
    while(queue.length) {
        const [x, y, count] = queue.shift();
        if (x === ax && y === ay) return count;
        
        for (const [mx, my] of moves) {
            const [px, py] = [x + mx, y + my];
            if (px < 0 || px > ax || py < 0 || py > ay) continue;
            if (maps[px][py] === 0) continue;
            maps[px][py] = 0;
            queue.push([px, py, count + 1]);
        }
    }   
    return -1;
}