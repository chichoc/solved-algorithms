const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0].split(' ')[0];
const unheardNames = new Set(inputs.slice(1, 1 + N));
const unseennames = new Set(inputs.slice(1 + N));
const answer = [];

for (const name of unheardNames) {
  if (!unseennames.has(name)) continue;
  answer.push(name);
}

console.log(`${answer.length}\n${answer.sort().join('\n')}`);