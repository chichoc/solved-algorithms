const inputs = require('fs').readFileSync(0).toString().trim().split('\n'); // 입력 여러 줄
const N = +inputs[0];
const S = inputs[1].split(' ').map(Number);
const sum = new Set([...S]);

const getSum = (arr) => arr.reduce((curr, sum) => curr + sum, 0);

const getCombination = (arr, count) => {
  const result = [];
  if (count === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combinations = getCombination(rest, count - 1);
    const attached = combinations.map((combi) => [fixed, ...combi]);
    result.push(...attached);
  });

  return result;
};

for (let i = 2; i <= N; i++) {
  if (i === N) {
    const totalSum = getSum(S);
    sum.add(totalSum);
  } else {
    const newSums = getCombination(S, i);
    newSums.forEach((sums) => sum.add(getSum(sums)));
  }
}

const maxSum = Math.max(...sum);

for (let i = 1; i <= maxSum; i++) {
  if (sum.has(i)) continue;
  return console.log(i);
}

console.log(maxSum + 1);
