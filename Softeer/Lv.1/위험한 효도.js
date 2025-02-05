// https://softeer.ai/practice/7368
const [a, b, d] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
let answer = 0;

function play(timeFront, timeBack, distance) {
  return (timeFront + timeBack) * Math.floor(distance / timeFront) + (distance % timeFront);
}

const beforeTouch = play(b, a, d);
const afterTouch = play(a, b, d);
answer = beforeTouch + afterTouch;

console.log(a === d ? answer - b : answer);

/** 다른 풀이1: https://velog.io/@lookin_min/Softeer-%EC%9C%84%ED%97%98%ED%95%9C-%ED%9A%A8%EB%8F%84Python
 내 풀이와 비교
 * 문제를 복잡하게 풂 -> 문제의 핵심 파악하기 & 필요한 상태만 관리
 * 핵심: 앞, 뒤 시간만 다르고 동일한 로직이므로 함수 분리 가능
 **/

/** 다른 풀이2: https://yunicornlab.tistory.com/22
 내 풀이와 비교
 * 수학적 접근
 * 핵심: a === d인 경우 술래 터치 후 뒤를 보는 시간이 필요없으므로 -b를 해줌
 **/
