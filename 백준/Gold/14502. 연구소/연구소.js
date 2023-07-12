const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, M] = inputs[0].split(' ').map(Number);
const lab = inputs.slice(1).map((input) => input.split(' ').map(Number));
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
const positionOfVirus = [];
let answer = 0;


// 바이러스 위치 파악
for (let r = 0; r < N; r++) {
  for (let c = 0; c < M; c++) {
    if (lab[r][c] === 2) positionOfVirus.push([r, c]);
  }
}

addBlock(0);
console.log(answer);

function addBlock(count) {
  if (count === 3) {
    const deepCopy = lab.map((row) => [...row]);
    const countOfSafe = spreadVirus(deepCopy);

    answer = Math.max(answer, countOfSafe);
    return;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (lab[i][j] > 0) continue;
      lab[i][j] = 1;
      addBlock(count + 1);
      lab[i][j] = 0;
    }
  }
}

function spreadVirus(addedLab) {
  let count = 0;
  const queue = positionOfVirus.map((pos) => [...pos]);

  while (queue.length) {
    const [currX, currY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const [mx, my] = [currX + dx[i], currY + dy[i]];

      if (mx < 0 || mx >= N || my < 0 || my >= M) continue;
      if (addedLab[mx][my] > 0) continue;
      addedLab[mx][my] = 2;
      queue.push([mx, my]);
    }
  }

  // 영역 개수
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (addedLab[i][j] === 0) count++;
    }
  }
  return count;
}