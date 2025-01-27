const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const M = +inputs[0].split(' ')[1];
const papers = inputs.slice(1).map((paper) => paper.split(' ').map(Number));
const pictures = Array.from({ length: 101 }, () => Array(101).fill(0));
let answer = 0;

// 주어진 종이들로 가리기
for (const paper of papers) {
  cover(...paper);
}

// M+1개 가려져 보이지 않는 그림의 개수 세기
for (let r = 0; r <= 100; r++) {
  for (let c = 0; c <= 100; c++) {
    if (pictures[r][c] > M) answer++;
  }
}

function cover(r1, c1, r2, c2) {
  for (let r = r1; r <= r2; r++) {
    for (let c = c1; c <= c2; c++) {
      pictures[r][c]++;
    }
  }
}

console.log(answer);
// 처음에 통과하지 못한 이유: 크기를 100, 즉 0~99로 설정함 (좌표는 100까지 가질 수 있음)
