const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const dfs = (n) => {
  if (n.length === M) return console.log(n.join(' '));
  for (let i = 1; i <= N; i++) {
    if (n.includes(i)) continue;
    n.push(i);
    dfs(n);
    n.pop();
  }
};

dfs([]);