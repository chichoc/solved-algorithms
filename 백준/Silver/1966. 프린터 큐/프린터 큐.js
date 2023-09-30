const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const numberOfTest = +inputs[0];
const answer = [];

for (let i = 0; i < numberOfTest; i++) {
  const [N, M] = inputs[i * 2 + 1].split(' ').map(Number);
  if (N === 1) answer.push(1);
  else answer.push(output(N, M, inputs[(i + 1) * 2].split(' ').map(Number)));
}

function output(end, idx, queue) {
  let order = 0;
  let prevPos = 0;

  for (let i = 0; i < end; i++) {
    const maxImportance = Math.max(...queue);
    // 이전에 탐색한 위치 뒷부분 먼저 탐색해야 함
    let maxPos = queue.indexOf(maxImportance, prevPos);
    if (maxPos < 0) maxPos = queue.indexOf(maxImportance);

    queue[maxPos] = 0;
    order++;
    if (maxPos === idx) return order;
    prevPos = maxPos;
  }
}

console.log(answer.join('\n'));