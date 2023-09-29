const N = +require('fs').readFileSync(0).toString().trim(); // 입력 한 줄
const answer = [];

hanoi(N, 1, 2, 3);

function hanoi(count, from, other, to) {
  if (count === 0) return;
  hanoi(count - 1, from, to, other);
  answer.push(`${from} ${to}`);
  hanoi(count - 1, other, from, to);
}

console.log(answer.length);
console.log(answer.join('\n'));