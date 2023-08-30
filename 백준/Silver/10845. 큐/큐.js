const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const orders = inputs.slice(1);
const queue = [];
const answer = [];

for (const order of orders) {
  if (order.includes('push')) queue.push(order.split(' ')[1]);
  // 출력해야하는 명령
  else {
    let output = 0;
    switch (order) {
      case 'pop':
        output = queue.length === 0 ? -1 : queue.shift();
        break;
      case 'size':
        output = queue.length;
        break;
      case 'empty':
        output = queue.length === 0 ? 1 : 0;
        break;
      case 'front':
        output = queue.length === 0 ? -1 : queue[0];
        break;
      case 'back':
        output = queue.length === 0 ? -1 : queue[queue.length - 1];
        break;
    }
    answer.push(output);
  }
}

console.log(answer.join('\n'));