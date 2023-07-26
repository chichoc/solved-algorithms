const num = +require('fs').readFileSync(0).toString().trim();
let gap = 1;
let count = 1;

while (num > count) {
  count += ++gap;
}

function makeFraction(sum, order) {
  let numerator = 0;
  let denominator = 0;

  if (sum % 2) {
    // 합이 홀수
    numerator = sum - order;
    denominator = order;
  } else {
    //  합이 짝수
    numerator = order;
    denominator = sum - order;
  }

  return `${numerator}/${denominator}`;
}

console.log(makeFraction(gap + 1, count - num + 1));
// 같은 대각선은 분자 + 분모의 합이 같음 (2, 3, 4, 5...)
// 1번째: 합 2
// 2~3번째: 합 3 (합이 홀수: 분자 오름차순)
// 4~6번째: 합 4 (합이 짝수: 분자 내림차순)
// 7~10번째: 합 5
// 11~15번째: 합 6