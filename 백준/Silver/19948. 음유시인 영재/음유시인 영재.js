const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const [poems, countSpace, countAlpha] = inputs;
const splittedPoems = poems.split(/\s+/);
const title = splittedPoems.map((poem) => poem[0].toUpperCase()).join('');
const content = splittedPoems.join('');

if (title.length - 1 > +countSpace) return console.log(-1);

const counts = countAlpha.split(' ').map(Number);
let past = '';

for (let i = 0; i < content.length; i++) {
  if (past === content[i]) continue;

  if (!check(content[i])) {
    return console.log(-1);
  }
  checkAlpha(content[i]);
  past = content[i];
}

past = '';
for (const a of title) {
  if (past === a) continue;

  if (!check(a)) {
    return console.log(-1);
  }
  checkAlpha(a);
  past = a;
}

function check(alpha) {
  const count = counts[alpha.toUpperCase().charCodeAt(0) - 65];
  return count > 0;
}

function checkAlpha(alpha) {
  if (alpha === past) return;
  counts[alpha.toUpperCase().charCodeAt(0) - 65] -= 1;
}

console.log(title);