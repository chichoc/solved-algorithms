const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, M] = inputs[0].split(' ').map(Number);
const nums = inputs[1].split(' ').map(Number);
const sortedNums = nums.sort((a, b) => a - b);
const answer = [];

function permutation(output, rests) {
  if (output.length === M) {
    return answer.push(output.join(' '));
  }

  rests.forEach((rest, idx) => permutation([...output, rest], [...rests.slice(0, idx), ...rests.slice(idx + 1)]));
}

permutation([], sortedNums);

console.log([...new Set(answer)].join('\n'));
