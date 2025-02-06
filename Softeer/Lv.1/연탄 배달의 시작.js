// https://softeer.ai/practice/7626
const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const n = +inputs[0];
const positions = inputs[1].split(' ').map(Number);
let answer = 0;
let minDiff = Infinity;

for (let i = 0; i < n - 1; i++) {
  const diff = positions[i + 1] - positions[i];
  if (diff < minDiff) {
    answer = 1;
    minDiff = diff;
  } else if (diff > minDiff) {
    continue;
  } else {
    answer += 1;
  }
}

console.log(answer);
/** 회고
 * IDE 환경이 아니다보니 변수 오타로 헤맴
 * 입력값이 오름차순이라 모두 순회할 필요 X
 */
