const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, M, H] = inputs[0].split(' ').map(Number);
let answer = 4;

// 가로선이 없는 경우 가로선 추가하지 않아도 조건 충족
if (M === 0) return console.log(0);

const connect = Array.from({ length: H }, () => Array(N).fill(0));

// 가로선 저장 (사다리 구조 파악)
for (let i = 1; i <= M; i++) {
  const [a, b] = inputs[i].split(' ').map(Number);
  connect[a - 1][b - 1] = 1;
}

dfs(0, 0, 0);
console.log(answer <= 3 ? answer : -1);

function check() {
  for (let i = 0; i < N; i++) {
    let pos = i;
    for (let j = 0; j < H; j++) {
      if (connect[j][pos]) pos += 1;
      else if (pos > 0 && connect[j][pos - 1]) pos -= 1;
    }
    if (pos !== i) return false;
  }
  return true;
}

function dfs(count, h, n) {
  if (count > 3 || answer <= count) return;
  if (check()) return (answer = Math.min(answer, count));

  for (let i = h; i < H; i++) {
    const k = i === h ? n : 0;
    for (let j = k; j < N - 1; j++) {
      if (connect[i][j - 1] || connect[i][j] || connect[i][j + 1]) continue;
      else {
        connect[i][j] = 1;
        dfs(count + 1, i, j + 2);
        connect[i][j] = 0;
      }
    }
  }
}