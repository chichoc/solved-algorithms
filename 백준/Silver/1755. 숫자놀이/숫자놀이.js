const [M, N] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
const eng = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const dict = [];
let answer = '';

// 숫자와 글자 같이 저장
for (let i = M; i <= N; i++) {
  dict.push([i, readEng(i)]);
}

// 글자 기준으로 정렬
dict.sort((a, b) => a[1].localeCompare(b[1]));

// 10개 단위로 출력
for (const [idx, arr] of Object.entries(dict)) {
  if (idx > 0 && idx % 10 === 0) answer += '\n';
  answer += arr[0] + ' ';
}

function readEng(num) {
  let result = '';
  if (num / 10 >= 1) result += eng[~~(num / 10)] + ' ';
  result += eng[num % 10];
  return result;
}

console.log(answer);