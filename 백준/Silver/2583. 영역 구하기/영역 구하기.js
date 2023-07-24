const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const [M, N, K] = inputs[0].split(' ').map(Number);
const rectangles = inputs.slice(1);
const visited = Array.from({ length: M }, () => Array(N).fill(false));
const dr = [1, -1, 0, 0];
const dc = [0, 0, 1, -1];
const answer = [];

// 직사각형 영역 확인
for (let i = 0; i < K; i++) {
  const [c1, r1, c2, r2] = rectangles[i].split(' ').map(Number);
  visit(c1, r1, c2, r2);
}

// 나머지 영역 확인
for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (visited[i][j]) continue;
    const size = countRest(i, j, 0);
    answer.push(size);
  }
}

// 넓이 정렬 (오름차순)
answer.sort((a, b) => a - b);

function visit(c1, r1, c2, r2) {
  for (let r = r1; r < r2; r++) {
    for (let c = c1; c < c2; c++) {
      visited[r][c] = true;
    }
  }
}

function countRest(r, c, size) {
  if (visited[r][c]) return size;
  visited[r][c] = true;
  size++;
  for (let i = 0; i < 4; i++) {
    mr = r + dr[i];
    mc = c + dc[i];
    if (mr < 0 || mr >= M || mc < 0 || mc >= N) continue;
    size = Math.max(size, countRest(mr, mc, size));
  }
  return size;
}

console.log(answer.length + '\n' + answer.join(' '));