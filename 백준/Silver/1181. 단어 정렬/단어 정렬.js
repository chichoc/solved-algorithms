const [N, ...words] = require('fs').readFileSync(0).toString().trim().split('\n');

const obj = {};
const answer = [];

for (let i = 0; i < N; i++) {
  const len = words[i].length;
  if (obj[len]) obj[len].push(words[i]);
  else obj[len] = [words[i]];
}

for (const arr of Object.values(obj)) {
  arr.sort();
  answer.push(...new Set(arr));
}

console.log(answer.join('\n'));