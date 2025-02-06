// https://softeer.ai/practice/7695
const inputs = require('fs').readFileSync(0).toString().toString().split('\n');
const N = +inputs[0];

let minY = +inputs[1].split(' ')[1];
let answer = inputs[1];

for (let i = 2; i <= N; i++) {
  const [x, y] = inputs[i].split(' ').map(Number);

  if (y > minY) continue;
  minY = y;
  answer = inputs[i];
}

console.log(answer);

/** 회고
 * 문제를 잘못 이해해서 헤맴 (쓸데없이 장황함)
 'x축의 양의 방향을 동쪽으로 하는 2차원 좌표평면으로 나타내어진다.'를 참고하여 
 x가 양수인 경우만 정답에 포함했더니 케이스 2개 틀림
 알고보니 x조건 고려하지 않고 y가 가장 작은 점이 정답
 */
