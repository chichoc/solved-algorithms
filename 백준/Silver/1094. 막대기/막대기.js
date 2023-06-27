const X = +require('fs').readFileSync(0).toString().trim()
const sticks = [64];

while (add(sticks) > X) {
  const stick = sticks.pop();
  if (add(sticks) + stick / 2 >= X) sticks.push(stick / 2);
  else sticks.push(stick / 2, stick / 2);
}
function add(arr) {
  return arr.reduce((sum, elem) => sum + elem, 0);
}

console.log(sticks.length);
// 64 -> 32 -> 16 16 -> 16 8 -> 16 4 4 -> 16 4 2 2 -> 16 4 2 1