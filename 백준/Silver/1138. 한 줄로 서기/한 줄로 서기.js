const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0];
const memories = inputs[1].split(' ').map(Number);
const answer = Array(N).fill(0);

for (let i = 0; i < N; i++) {
  const pos = memories[i];
  let bigger = answer.slice(0, pos).filter((num) => !num).length;
  let idx = pos;

  while (bigger <= pos) {
    if (answer[idx] === 0) {
      if (bigger === pos) break;
      bigger++;
    }
    idx++;
  }
  // const otherPos = pos + answer.slice(0, pos).filter((num) => num > 0).length;
  // const move = answer.slice(otherPos).indexOf(0) + otherPos;

  // let otherPos = answer.slice(pos).indexOf(0) + pos;
  // const move = pos - answer.slice(0, otherPos).filter((num) => !num).length;
  // if (move > 0) otherPos += move;
  answer[idx] = i + 1;
}

console.log(answer.join(' '));
// https://www.acmicpc.net/board/view/49661
// 반례: 10 \n 5 3 7 1 4 2 1 0 0 0
// 정답: 8 4 7 2 6 1 9 5 10 3
// 출력: 8 4 6 2 5 1 7 3 9 10
// 헤맨 점: 너무 복잡하게 구현함 (while 쓰는게 훨 가독성 좋음)
