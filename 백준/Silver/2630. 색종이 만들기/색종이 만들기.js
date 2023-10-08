const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0];
const paper = inputs.slice(1).map((input) => input.split(' ').map(Number));
const answer = [0, 0]; // 하얀색, 파란색

split(paper, N);

function split(array, n) {
  if (n === 1) answer[array[0]] += 1;
  else if (checkColor(array, n)) answer[array[0][0]] += 1;
  else {
    n /= 2;
    split(
      array.slice(0, n).map((arr1) => arr1.filter((_, idx) => idx < n)),
      n
    );
    split(
      array.slice(0, n).map((arr1) => arr1.filter((_, idx) => idx >= n)),
      n
    );
    split(
      array.slice(n).map((arr1) => arr1.filter((_, idx) => idx < n)),
      n
    );
    split(
      array.slice(n).map((arr1) => arr1.filter((_, idx) => idx >= n)),
      n
    );
  }
}

function checkColor(array, n) {
  let flag = array[0][0];

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (flag !== array[r][c]) return false;
    }
  }
  return true;
}

console.log(answer.join('\n'));