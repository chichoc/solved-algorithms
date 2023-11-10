let N = +require('fs').readFileSync(0).toString().trim(); // 입력 한 줄
let count = 0;

while (N >= 5) {
  count += Math.floor(N / 5);
  N = Math.floor(N / 5);
}

console.log(count);