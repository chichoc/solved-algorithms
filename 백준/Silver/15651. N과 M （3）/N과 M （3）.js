const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);
let answer = '';

const dfs = (n) => {
  if (n.length === M) return answer += `${n.join(' ')}\n`;
  for (let i = 1; i <= N; i++) {
    n.push(i);
    dfs(n);
    n.pop();
  }
};

dfs([]);
console.log(answer);
// console.log()가 시간 초과에 영향을 주기 때문에 한번에 출력