const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0].split(' ')[0];
const countOfSet = 6;
const pricesOfSet = [];
const pricesOfPiece = [];

// 세트와 개별 가격 분리해서 저장
inputs.slice(1).forEach((input) => {
  const [set, piece] = input.split(' ');
  pricesOfSet.push(set);
  pricesOfPiece.push(piece);
});

const minSet = Math.min(...pricesOfSet);
const minPiece = Math.min(...pricesOfPiece);

console.log(
  Math.min(
    minSet * Math.ceil(N / countOfSet),
    minSet * Math.floor(N / countOfSet) + (N % countOfSet) * minPiece,
    N * minPiece
  )
);