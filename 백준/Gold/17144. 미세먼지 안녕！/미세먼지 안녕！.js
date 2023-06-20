const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const [R, C, T] = inputs[0].split(' ').map(Number);
const dusts = inputs.slice(1).map((row) => row.split(' ').map(Number));
let pos = 0;
let answer = 0;

// 공기청정기 위치 구하기
for (let r = 0; r < R; r++) {
  if (dusts[r][0] === -1) {
    pos = r;
    break;
  }
}

for (let i = 0; i < T; i++) {
  spread();
  purify([pos, 0], 1);
  purify([pos + 1, 0], -1);
}

// 남아있는 미세먼지 양 계산
for (const row of dusts) {
  answer += row.reduce((sum, curr) => sum + curr, 0);
}

console.log(answer + 2); // 공기청정기 위치값(-1) 두 개 더한 값이니 +2

// 미세먼지 확산
function spread() {
  const spreadRow = [1, -1, 0, 0];
  const spreadCol = [0, 0, 1, -1];
  const spreadDusts = [];
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (dusts[r][c] <= 0) continue;
      const dust = dusts[r][c];
      const numOfSpread = Math.floor(dust / 5);
      for (let i = 0; i < 4; i++) {
        const [moveToRow, moveToCol] = [r + spreadRow[i], c + spreadCol[i]];

        if (moveToRow < 0 || moveToRow >= R || moveToCol < 0 || moveToCol >= C) continue;
        // 공기청정기가 있는 칸은 확산X
        if (dusts[moveToRow][moveToCol] === -1) continue;
        spreadDusts.push([moveToRow, moveToCol, numOfSpread]);
        dusts[r][c] -= numOfSpread;
      }
    }
  }
  for (const [row, col, amount] of spreadDusts) {
    dusts[row][col] += amount;
  }
}

// 공기청정기 작동
function purify([r1, c1], clockwise) {
  let d = 0;
  let prev = 0;
  let [mr, mc] = [r1, c1];
  const rowToMove = [0, -1, 0, 1];
  const colToMove = [1, 0, -1, 0];

  while (mr + rowToMove[d] * clockwise !== r1 || mc + colToMove[d] !== c1) {
    if (
      mr + rowToMove[d] * clockwise < 0 ||
      mr + rowToMove[d] * clockwise >= R ||
      mc + colToMove[d] >= C ||
      mc + colToMove[d] < 0
    )
      d++;
    mr += rowToMove[d] * clockwise;
    mc += colToMove[d];
    if (dusts[mr][mc] === -1) break;
    let next = dusts[mr][mc];
    if (prev > 0) dusts[mr][mc] = prev;
    else dusts[mr][mc] = 0;
    prev = next;
  }
}