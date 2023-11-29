const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, d, k, c] = inputs[0].split(' ').map(Number);
const dishes = inputs.slice(1).map(Number);
let answer = 0;

for (let i = 0; i < N; i++) {
  const dish = new Set(eat(i));
  dish.add(c);
  answer = Math.max(dish.size, answer);
}

function eat(start) {
  const result = dishes.slice(start, start + k);
  if (start + k > N) {
    result.push(...dishes.slice(0, start + k - N));
  }
  return result;
}

console.log(answer);