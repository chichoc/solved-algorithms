const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, K] = inputs[0].split(' ').map(Number);
const dolls = inputs[1].split(' ').map(Number);
const lyan = 1;
let minSize = Infinity;
let start = 0;
let numberOfLyan = 0;

for (let end = 0; end < N; end++) {
    if (dolls[end] === lyan) numberOfLyan++;

    while (numberOfLyan === K) {
      if (dolls[start] === lyan) numberOfLyan--;
      
      minSize = Math.min(minSize, end - start + 1);
      start++;
    }
}

console.log(minSize === Infinity ? -1 : minSize);