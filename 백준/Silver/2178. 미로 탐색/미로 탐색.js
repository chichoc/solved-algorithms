const [ints, ...infoOfMaze] = require('fs').readFileSync(0).toString().trim().split('\n');

let answer = 0;
const [maxRow, maxCol] = ints.split(' ').map(Number);
const maze = Array.from({ length: maxRow }, () => []);
const visited = Array.from({ length: maxRow }, () => Array(maxCol).fill(false));
const queue = [[0, 0, 1]];

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

// 미로 정보 저장
for (let r = 0; r < maxRow; r++) {
  maze[r] = infoOfMaze[r].split('').map(Number);
}

while (queue.length) {
  const [mx, my, depth] = queue.shift();
  answer = depth;
  if (mx === maxRow - 1 && my === maxCol - 1) return console.log(answer);
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [mx + dx[i], my + dy[i]];
    if (nx < 0 || nx >= maxRow || ny < 0 || ny >= maxCol) continue;
    if (maze[nx][ny] === 0 || visited[nx][ny]) continue;
    queue.push([nx, ny, depth + 1]);
    visited[nx][ny] = true;
  }
}