const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0];
const infos = inputs.slice(1, N);
const [target1, target2] = inputs[N].split(' ');
const tree = {};

function find(start, target) {
  let current = start;

  while (tree[current]) {
    if (tree[current] === target) return true;
    current = tree[current];
  }
  return false;
}

for (const info of infos) {
  const [s, p] = info.split(' ');
  tree[s] = p;
}

console.log(find(target1, target2) || find(target2, target1) ? 1 : 0);