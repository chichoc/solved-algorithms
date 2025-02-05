// https://softeer.ai/practice/7368
const [a, b, d] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
let answer = 0;

function play(timeFront, timeBack, restD) {
  let result = 0;
  let front = false;

  while (restD > 0) {
    if (front) {
      result += timeFront;
      front = false;
    } else {
      for (let i = 0; i < timeBack; i++) {
        restD -= 1;
        result += 1;
        if (restD === 0) return result;
      }
      front = true;
    }
  }
  return result;
}

answer += play(b, a, d);
answer += play(a, b, d);

console.log(answer);

/** 다른 풀이1: https://velog.io/@lookin_min/Softeer-%EC%9C%84%ED%97%98%ED%95%9C-%ED%9A%A8%EB%8F%84Python
 내 풀이와 비교
 * 문제를 복잡하게 풂 -> 문제의 핵심 파악하기 & 필요한 상태만 관리
 * 핵심: 앞, 뒤 시간만 다르고 동일한 로직이므로 함수 분리 가능
 **/
