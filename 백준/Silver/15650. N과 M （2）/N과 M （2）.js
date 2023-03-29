const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const dfs = (n) => {
  if (n.length === M) return console.log(n.join(' '));
  const lastNum = n[n.length - 1] || 0;
  for (let i = lastNum + 1; i <= N; i++) {
    if (n.includes(i)) continue;
    n.push(i);
    dfs(n);
    n.pop();
  }
};

dfs([]);