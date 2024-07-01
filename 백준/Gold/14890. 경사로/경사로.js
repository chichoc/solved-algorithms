const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, L] = inputs[0].split(' ').map(Number);
const map = inputs.slice(1).map((input) => input.split(' ').map(Number));

let answer = 0;

function availableRamp(p, fixed, iterated, isExisted) {
  const height = p === 'row' ? map[fixed][iterated] : map[iterated][fixed];
  if (iterated + 1 - L < 0) return false;

  for (let j = iterated; j > iterated - L; j--) {
    const currHeight = p === 'row' ? map[fixed][j] : map[j][fixed];
    if (currHeight !== height || isExisted[j]) return false;
  }

  // 경사로 설치
  for (let j = iterated; j > iterated - L; j--) {
    isExisted[j] = true;
  }

  return true;
}

function canPassRoad(idx, pos) {
  let rampCount = 0;
  let prev = pos === 'row' ? map[idx][0] : map[0][idx];
  const isExistedRoad = Array(N).fill(false);

  for (let i = 1; i < N; i++) {
    const curr = pos === 'row' ? map[idx][i] : map[i][idx];

    if (rampCount > 0) {
      if (curr === prev) {
        isExistedRoad[i] = true;
        rampCount += 1;

        if (rampCount === L) {
          // 내림차순 경사로 end
          rampCount = 0;
        } else {
          // 내림차순 경사로 계속 ing
          continue;
        }
      } else {
        if (rampCount === L) return true; // 디버깅 예제마지막
        else {
          rampCount = 0;
          return false;
        }
      }
    } else {
      // 경사로 X
      if (curr === prev) continue;
      else if (Math.abs(curr - prev) === 1) {
        if (prev - curr > 0) {
          // 내림차순 경사로 start
          if (++rampCount === L) rampCount = 0;
          isExistedRoad[i] = true;
          prev = curr;
        } else {
          // 오름차순 경사로 가능한지 확인
          if (availableRamp(pos, idx, i - 1, isExistedRoad)) {
            prev = curr;
            continue;
          } else {
            return false;
          }
        }
      } else return false;
    }
  }
  if ((rampCount > 0 && rampCount === L) || rampCount === 0) return true;
  else return false;
}

for (let i = 0; i < N; i++) {
  if (canPassRoad(i, 'row')) answer++;
  if (canPassRoad(i, 'col')) answer++;
}

console.log(answer);