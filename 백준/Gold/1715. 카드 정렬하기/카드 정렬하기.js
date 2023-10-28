class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  swap(a, b) {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  push(value) {
    const { heap } = this;
    heap.push(value);
    let index = heap.length - 1;
    let parent = ~~((index - 1) / 2);

    while (index > 0 && heap[index] < heap[parent]) {
      this.swap(index, parent);
      index = parent;
      parent = ~~((index - 1) / 2);
    }
  }
  pop() {
    const { heap } = this;
    if (heap.length <= 1) return heap.pop();

    const output = heap[0];
    heap[0] = heap.pop();
    let index = 0;

    while (index * 2 + 1 < heap.length) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      let next = index;

      if (heap[left] < heap[next]) next = left;
      if (right < heap.length && heap[right] < heap[next]) next = right;
      if (index === next) break;

      this.swap(index, next);
      index = next;
    }
    return output;
  }
}

const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const cards = inputs
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

const queue = new PriorityQueue();
let answer = 0;

cards.forEach((card) => queue.push(card));

while (queue.heap.length > 1) {
  const sum = queue.pop() + queue.pop();
  queue.push(sum);
  answer += sum;
}

console.log(answer);