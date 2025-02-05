// https://softeer.ai/practice/7368
const [a, b, d] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
let front = false;
let isTouched = false;
let answer = 0;
let movingDistance = 0;

while (!isTouched || movingDistance > 0) {
  if (front) {
    const d = isTouched ? -a : b;
    answer += Math.abs(d);
  } else {
    const d = isTouched ? -b : a;
    movingDistance += d;
    answer += Math.abs(d);
    if (movingDistance < 0) answer += movingDistance;
  }
  front = !front;

  if (!isTouched && movingDistance >= d) {
    isTouched = true;
    front = false;
    answer -= movingDistance - d;
    movingDistance = d;
  }
}

console.log(answer);
