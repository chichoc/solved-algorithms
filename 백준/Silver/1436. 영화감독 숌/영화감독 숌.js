const N = +require('fs').readFileSync(0).toString().trim(); // 입력 한 줄
const num = '666';
let answer = 0;
let count = 0;

while (count < N) {
  answer++;
  if (answer.toString().includes(num)) count++;
}

console.log(answer);