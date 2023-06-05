const inputs = require('fs').readFileSync(0).toString().trim().split('\n');

const [N, C] = inputs[0].split(' ').map(Number);
const boxes = inputs.slice(2).map((input) => input.split(' ').map(Number));
const truck = [];
let weightOfTruck = 0;
let answer = 0;

boxes.sort((a, b) => a[0] - b[0] || a[1] - b[1]); // 보내는 마을 순으로 정렬

for (let i = 1; i <= N; i++) {
  // 박스 배송
  for (const t of truck) {
    if (t[1] === i) {
      answer += t[2];
      weightOfTruck -= t[2];
    }
    if (t[0] >= i) break;
  }
  truck.filter((t) => t[1] !== i);

  if (weightOfTruck >= C) continue;

  // 박스 싣기
  for (const box of boxes) {
    if (weightOfTruck === C) break;
    if (box[0] < i) continue;
    if (box[0] > i) break;
    if (box[0] === i) {
      if (C - weightOfTruck < box[2]) box[2] = C - weightOfTruck;
      truck.push(box);
      weightOfTruck += box[2];
    }
  }
}

console.log(answer);