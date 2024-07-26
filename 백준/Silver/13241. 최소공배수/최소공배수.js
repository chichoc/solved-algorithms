const [A, B] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

function gcd(a, b) {
  let r;
  while (b !== 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

console.log(A > B ? lcm(A, B) : lcm(B, A));