let N = +require('fs').readFileSync(0).toString().trim();
let count = 0;

while (N >= 5) {
  N = Math.floor(N / 5);
  count += N;
}

console.log(count);