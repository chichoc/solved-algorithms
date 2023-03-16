const fs = require('fs');
const input = fs.readFileSync(0).toString().split(' ');

n = +input[0];
let countFib = 0;
let countFibonacci = 0;

fib = (n) => {
  if (n == 1 || n == 2) {
    countFib++;
    return 1; // 코드1
  } else return fib(n - 1) + fib(n - 2);
};

const f = [];
fibonacci = (n) => {
  f[1] = f[2] = 1;
  for (let i = 3; i <= n; i++) {
    countFibonacci++;
    f[i] < -f[i - 1] + f[i - 2]; // 코드2
  }
  return f[n];
};

fib(n);
fibonacci(n);

console.log(countFib, countFibonacci);