const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, L, R] = inputs[0].split(' ').map(Number);
const drow = [0, 0, 1, -1];
const dcol = [1, -1, 0, 0];
const populationOfCountry = inputs.slice(1).map((input) => input.split(' ').map(Number));
const visitedCountry = Array.from({ length: N }, () => Array(N).fill(false));
let answer = 0;

while (true) {
  let flag = false;
  resetVisit();
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      if (visitedCountry[row][col]) continue;
      const unionCount = visit(row, col);
      if (unionCount > 1) flag = true;
    }
  }
  if (flag) answer++;
  else break;
}

function resetVisit() {
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      visitedCountry[row][col] = false;
    }
  }
}

function visit(r, c) {
  let population = populationOfCountry[r][c];
  const union = [[r, c]];
  const stack = [[r, c]];
  visitedCountry[r][c] = true;

  while (stack.length) {
    const [r, c] = stack.pop();
    for (let d = 0; d < 4; d++) {
      const [mr, mc] = [r + drow[d], c + dcol[d]];
      if (mr < 0 || mr >= N || mc < 0 || mc >= N) continue;
      if (visitedCountry[mr][mc]) continue;

      const diff = Math.abs(populationOfCountry[r][c] - populationOfCountry[mr][mc]);
      if (diff < L || diff > R) continue;

      stack.push([mr, mc]);
      union.push([mr, mc]);
      population += populationOfCountry[mr][mc];
      visitedCountry[mr][mc] = true;
    }
  }
  union.forEach(([r, c]) => (populationOfCountry[r][c] = Math.floor(population / union.length)));
  return union.length;
}

function checkMoving() {
  let population = 0;
  let country = 0;
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      if (!visitedCountry[row][col]) continue;
      population += populationOfCountry[row][col];
      country++;
    }
  }
  return country > 1 ? Math.floor(population / country) : 0;
}

function move(p) {
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      if (visitedCountry[row][col]) populationOfCountry[row][col] = p;
    }
  }
}

console.log(answer);