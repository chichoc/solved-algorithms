const [N, ...inputs] = require('fs').readFileSync(0).toString().trim().split('\n');

const stack = [];
const answer = [];

for (const input of inputs) {
  const order = input.split(' ');
  switch (order[0]) {
    case 'push':
      stack.push(order[1]);
      break;
    case 'top':
      answer.push(stack.length > 0 ? stack[stack.length - 1] : -1);
      break;
    case 'size':
      answer.push(stack.length);
      break;
    case 'empty':
      answer.push(stack.length === 0 ? 1 : 0);
      break;
    case 'pop':
      answer.push(stack.length > 0 ? stack.pop() : -1);
      break;
  }
}

console.log(answer.join('\n'));