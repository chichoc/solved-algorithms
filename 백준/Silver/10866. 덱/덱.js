const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const orders = inputs.slice(1);
const queue = [];
const answer = [];

for (const order of orders) {
  const [string, num] = order.split(' ');
  switch (string) {
    case 'push_front':
      queue.unshift(num);
      break;
    case 'push_back':
      queue.push(num);
      break;
    case 'pop_front':
      answer.push(queue.length ? queue.shift() : -1);
      break;
    case 'pop_back':
      answer.push(queue.length ? queue.pop() : -1);
      break;
    case 'size':
      answer.push(queue.length);
      break;
    case 'empty':
      answer.push(queue.length ? 0 : 1);
      break;
    case 'front':
      answer.push(queue.length ? queue[0] : -1);
      break;
    case 'back':
      answer.push(queue.length ? queue[queue.length - 1] : -1);
  }
}

console.log(answer.join('\n'));