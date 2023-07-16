const N = +require('fs').readFileSync(0).toString().trim();
let answer = 0;

for (let i = 1; i <= N; i++) {
  if (checkSameDiff(i.toString().split(''))) answer++;
}

function checkSameDiff(arr) {
  if (arr.length <= 2) return true;

  let answer = arr[0] - arr[1];
  for (let idx = 1; idx < arr.length - 1; idx++) {
    if (arr[idx] - arr[idx + 1] !== answer) return false;
  }
  return true;
}

console.log(answer);