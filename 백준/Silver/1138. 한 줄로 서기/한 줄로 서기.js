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
  answer[idx] = i + 1;
}

console.log(answer.join(' '));
// https://www.acmicpc.net/board/view/49661
// 반례: 10 \n 5 3 7 1 4 2 1 0 0 0
// 정답: 8 4 7 2 6 1 9 5 10 3
// 출력: 8 4 6 2 5 1 7 3 9 10