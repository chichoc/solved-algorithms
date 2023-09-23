const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, M] = inputs[0].split(' ').map(Number);
const graph = inputs.slice(1).map((input) => input.split(' ').map(Number));
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
let cheeze = 0;
let answer = 0;

// 치즈 부피 확인 (가장자리 제외)
for (let row = 1; row < N - 1; row++) {
  for (let col = 1; col < M - 1; col++) {
    if (graph[row][col]) cheeze++;
  }
}

while (cheeze > 0) {
  const posToMelt = [];
  splitOutside();

  // 가장자리에는 치즈 놓이지 않으므로 1부터 녹일 치즈 찾기
  for (let row = 1; row < N - 1; row++) {
    for (let col = 1; col < M - 1; col++) {
      if (graph[row][col] !== 1) continue;
      if (isMelt(row, col)) posToMelt.push([row, col]);
    }
  }
  // 한 번에 녹이기
  for (const [r, c] of posToMelt) {
    graph[r][c] = 0;
  }
  cheeze -= posToMelt.length;
  answer++;
}

// 내외부 구분 (0인데 내부인 경우가 있으므로 외부 -1 별도 표기)
function splitOutside() {
  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  const queue = [[0, 0]];

  while (queue.length) {
    const [r, c] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const [mr, mc] = [r + dx[i], c + dy[i]];
      if (mr < 0 || mr >= N || mc < 0 || mc >= M) continue;
      if (visited[mr][mc] || graph[mr][mc] === 1) continue;
      visited[mr][mc] = true;
      graph[mr][mc] = -1;
      queue.push([mr, mc]);
    }
  }
}

function isMelt(row, col) {
  let count = 0;
  for (let i = 0; i < 4; i++) {
    const [mr, mc] = [row + dx[i], col + dy[i]];
    if (mr < 0 || mr >= N || mc < 0 || mc >= M) continue;
    if (graph[mr][mc] < 0) count++;
  }
  return count >= 2 ? true : false;
}

console.log(answer);