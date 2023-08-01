const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0];
const numsToLike = Array.from({ length: N ** 2 });
const classroom = Array.from({ length: N }, () => Array(N).fill(0));
const closeRow = [-1, 1, 0, 0];
const closeCol = [0, 0, 1, -1];
let answer = 0;

for (let i = 1; i <= N ** 2; i++) {
  const [numOfStudent, ...numsOfStudentsToLike] = inputs[i].split(' ').map(Number);
  // 좋아하는 번호 별도 저장하기
  numsToLike[numOfStudent] = numsOfStudentsToLike;

  // 학생 자리 정하기
  const [row, col] = chooseSeat(numsOfStudentsToLike);
  classroom[row][col] = numOfStudent;
}

// 만족도 구하기
for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    answer += countSatisfaction(r, c, numsToLike[classroom[r][c]]);
  }
}

function chooseSeat(likes) {
  // 규칙 1 & 규칙 2
  const emptySeat = findEmpty();
  if (emptySeat.length === 1) return emptySeat[0];
  const seats = checkClose(emptySeat, likes);

  if (seats.length === 1) return seats[0];
  // 규칙 3
  seats.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  return seats[0];
}

function findEmpty() {
  const result = [];
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (classroom[r][c] === 0) result.push([r, c]);
    }
  }
  return result;
}

function checkClose(empty, likes) {
  const countLike = Array(empty.length).fill(0);
  const countEmpty = Array(empty.length).fill(0);
  const result = [];

  for (let i = 0; i < empty.length; i++) {
    const [row, col] = empty[i];
    for (let j = 0; j < 4; j++) {
      const nearRow = row + closeRow[j];
      const nearCol = col + closeCol[j];
      if (nearRow < 0 || nearRow >= N || nearCol < 0 || nearCol >= N) continue;

      // 인접한 칸 중에서 좋아하는 학생이 존재하거나 비어있는 경우 카운트
      const closeNum = classroom[nearRow][nearCol];
      if (closeNum === 0) countEmpty[i]++;
      else if (likes.includes(closeNum)) countLike[i]++;
    }
  }

  // 좋아하는 학생이 가장 많이 인접한 경우
  const maxLike = Math.max(...countLike);
  for (let idx = 0; idx < empty.length; idx++) {
    if (countLike[idx] === maxLike) result.push(idx);
  }
  if (result.length === 1) return [empty[result[0]]];

  // 그 중에서 비어있는 칸이 가장 많은 경우
  const maxCount = Math.max(...countEmpty.filter((_, idx) => result.includes(idx)));

  return result.filter((idx) => countEmpty[idx] === maxCount).map((idx) => empty[idx]);
}

function countSatisfaction(row, col, likes) {
  let count = 0;
  for (let j = 0; j < 4; j++) {
    const nearRow = row + closeRow[j];
    const nearCol = col + closeCol[j];
    if (nearRow < 0 || nearRow >= N || nearCol < 0 || nearCol >= N) continue;
    if (likes.includes(classroom[nearRow][nearCol])) count++;
  }

  switch (count) {
    case 0:
      return 0;
    case 1:
      return 1;
    case 2:
      return 10;
    case 3:
      return 100;
    case 4:
      return 1000;
  }
}

console.log(answer);