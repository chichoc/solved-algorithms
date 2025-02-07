// https://softeer.ai/practice/6268
const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const testCases = inputs.slice(1).map((input) => input.split(' '));
const answer = [];
const numbersSwitch = {
  '*': [0, 0, 0, 0, 0, 0, 0],
  0: [1, 1, 0, 1, 1, 1, 1],
  1: [0, 1, 0, 0, 1, 0, 0],
  2: [1, 1, 1, 0, 0, 1, 1],
  3: [1, 1, 1, 0, 1, 1, 0],
  4: [0, 1, 1, 1, 1, 0, 0],
  5: [1, 0, 1, 1, 1, 1, 0],
  6: [1, 0, 1, 1, 1, 1, 1],
  7: [1, 1, 0, 1, 1, 0, 0],
  8: [1, 1, 1, 1, 1, 1, 1],
  9: [1, 1, 1, 1, 1, 1, 0],
};

for (const [num1, num2] of testCases) {
  const light1 = num1.padStart(5, '*');
  const light2 = num2.padStart(5, '*');
  let totalSwitching = 0;

  for (let i = 0; i < 5; i++) {
    if (light1[i] === light2[i]) continue;
    const switching = numbersSwitch[light1[i]].filter((elem, idx) => elem !== numbersSwitch[light2[i]][idx]).length;
    totalSwitching += switching;
  }
  answer.push(totalSwitching);
}

console.log(answer.join('\n'));

/** 회고
 * 숫자별 스위치 상태를 저장할 때 배열로 하니까 몇 번째 숫자인지 분간이 어려워 객체로 변경
 * 0과 다른 상태인 아예 꺼진 경우를 *로 표시하여 구분
 */
