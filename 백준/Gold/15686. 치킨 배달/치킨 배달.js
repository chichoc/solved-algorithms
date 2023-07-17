const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, M] = inputs[0].split(' ').map(Number);
const city = inputs.slice(1).map((input) => input.split(' ').map(Number));
const visitedChicken = Array.from({ length: 13 }).fill(false);
const chickens = [];
const homes = [];
let answer = 987654321;

// 집과 치킨집 파악
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (city[i][j] === 1) homes.push([i, j]);
    else if (city[i][j] === 2) chickens.push([i, j]);
  }
}

for (let i = 0; i < chickens.length - M + 1; i++) {
  visitedChicken[i] = true;
  dfs(i, chickens[i][0], chickens[i][1], 1);
  visitedChicken[i] = false;
}

function dfs(idx, r, c, count) {
  if (count === M) {
    let distance = 0;
    for (const home of homes) {
      distance += getNearDistance(...home);
    }
    answer = Math.min(answer, distance);
    return;
  }

  for (let i = idx + 1; i < chickens.length - (M - count) + 1; i++) {
    visitedChicken[i] = true;
    dfs(i, chickens[i][0], chickens[i][1], count + 1);
    visitedChicken[i] = false;
  }
}

function getNearDistance(r1, c1) {
  const distances = [];
  for (let i = 0; i < chickens.length; i++) {
    const [r2, c2] = chickens[i];
    if (!visitedChicken[i]) continue;
    distances.push(Math.abs(r1 - r2) + Math.abs(c1 - c2));
  }
  return Math.min(...distances);
}

console.log(answer);
// 최대 의미 헷갈: https://www.acmicpc.net/board/view/40942
// 헤맨 점1: 무한루프 (41번째 줄 i가 아닌 idx값 증가시킴)
// 헤맨 점2: 문제 잘못 이해 (모든 치킨집과의 거리가 아닌 가장 가까운 치킨거리만 더하면 됨)