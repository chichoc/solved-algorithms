const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, M, K] = inputs[0].split(' ').map(Number);
const fireInfos = inputs.slice(1).map((input) => input.split(' ').map(Number)); // ri, ci, mi, si, di
const fireExist = Array(M).fill(1);
const board = Array.from({ length: N }, () => Array.from({ length: N }, () => []));
const directRow = [-1, -1, 0, 1, 1, 1, 0, -1];
const directCol = [0, 1, 1, 1, 0, -1, -1, -1];

let answer = 0;

// 주어진 파이어볼 위치 설정
for (let fireIdx = 0; fireIdx < M; fireIdx++) {
  const [r, c, m] = fireInfos[fireIdx];
  fireInfos[fireIdx][0] = r - 1;
  fireInfos[fireIdx][1] = c - 1;

  board[r - 1][c - 1].push(fireIdx);
  answer += m;
}

// 마법사 상어 이동 명령
for (let i = 0; i < K; i++) {
  // 모든 파이어볼 이동
  const fireLen = fireInfos.length;

  for (let fireIdx = 0; fireIdx < fireLen; fireIdx++) {
    if (fireExist[fireIdx] === 0) continue;

    const [r, c, m, s, d] = fireInfos[fireIdx];
    let moveToRow = r + directRow[d] * s;
    let moveToCol = c + directCol[d] * s;

    const boardIdx = board[r][c].indexOf(fireIdx);
    board[r][c].splice(boardIdx, 1);

    if (isOverBoard(moveToRow, moveToCol, N)) {
      moveToRow = (moveToRow < 0 ? changeNegativeToBoard(moveToRow, N) : moveToRow) % N;
      moveToCol = (moveToCol < 0 ? changeNegativeToBoard(moveToCol, N) : moveToCol) % N;

      // answer -= m;
      // fireExist[fireIdx] = 0;
      // 이탈하면 소멸?
      // continue;
    }
    board[moveToRow][moveToCol].push(fireIdx);
    fireInfos[fireIdx][0] = moveToRow;
    fireInfos[fireIdx][1] = moveToCol;
  }

  // 2개 이상의 파이어볼 > 4개로 나눔
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      if (board[row][col].length < 2) continue;

      const fireIdxToRemove = [...board[row][col]];
      board[row][col] = [];

      const [sumM, sumS, directs] = mergeFire(fireIdxToRemove);
      const countFireIdxToRemove = fireIdxToRemove.length;

      const newM = ~~(sumM / 5);
      answer -= sumM;
      if (newM === 0) continue;

      const newS = ~~(sumS / countFireIdxToRemove);
      const func = checkAllOddOrEven(directs) ? changeEven : changeOdd;
      answer += newM * 4;

      for (let i = 0; i < 4; i++) {
        const newFireidx = fireInfos.length;
        fireInfos.push([row, col, newM, newS, func(i)]);
        fireExist.push(1);
        board[row][col].push(newFireidx);
      }
    }
  }
}

function isOverBoard(r, c, n) {
  if (r < 0 || r >= n || c < 0 || c >= n) {
    return true;
  }
  return false;
}

function changeNegativeToBoard(nega, n) {
  return nega + Math.ceil((nega * -1) / n) * n;
}

function mergeFire(array) {
  let sumM = 0;
  let sumS = 0;
  const directs = [];

  for (const idx of array) {
    sumM += fireInfos[idx][2];
    sumS += fireInfos[idx][3];
    directs.push(fireInfos[idx][4]);
    fireExist[idx] = 0;
  }

  return [sumM, sumS, directs];
}

function checkAllOddOrEven(array) {
  const isAllOdd = array.every((elem) => elem % 2 === 1);
  const isAllEven = array.every((elem) => elem % 2 === 0);
  return isAllOdd || isAllEven;
}

function changeOdd(n) {
  return n * 2 + 1;
}
function changeEven(n) {
  return n * 2;
}

console.log(answer);
// 실수: ⌊기호 제대로 안봄 (물론 질량 0 소멸이면 소수점 버려야 함..), 1~N 읽지 않음, 속력 최대값이 1,000이라 참조에러
