const N = +require('fs').readFileSync(0).toString().trim(); // 입력 한 줄
let pattern = '';
let answer = '***\n* *\n***';

for (let i = 9; i <= N; i *= 3) {
  pattern = answer;
  let row = 0;
  for (let j = 1; j < 9; j++) {
    if (j === 4) {
      const splitedAnswer = answer.split('\n');
      for (let k = 0; k < i / 3; k++) {
        splitedAnswer[row + k] += ' '.repeat(i / 3);
      }
      answer = splitedAnswer.join('\n');
    } else if (j % 3 === 0) {
      answer += `\n${pattern}`;
      row += i / 3;
    } else {
      const splitedAnswer = answer.split('\n');
      const splitedPattern = pattern.split('\n');
      for (let k = 0; k < i / 3; k++) {
        splitedAnswer[row + k] += splitedPattern[k];
      }
      answer = splitedAnswer.join('\n');
    }
  }
}

console.log(answer);