const [A, B] = require('fs').readFileSync(0).toString().trim().split(' ');
let answer = A.length;
const maxLength = B.length;
const gap = maxLength - answer;

for (let back = 0; back <= gap / 2; back++) {
  answer = Math.min(
    answer,
    countGap(B.slice(0, gap - back) + A + B.slice(maxLength - back), B),
    countGap(B.slice(0, back) + A + B.slice(maxLength - gap + back), B)
  );
}

function countGap(str1, str2) {
  let result = 0;
  for (let i = 0; i < maxLength; i++) {
    if (str1[i] !== str2[i]) result++;
  }
  return result;
}

console.log(answer);