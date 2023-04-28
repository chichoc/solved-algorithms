const [N, ...input] = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);

const heap = [0];
let answer = '';

for (const num of input) {
  if (num > 0) insertHeap(num);
  else if (heap.length > 1) answer += `${deleteHeap()}\n`;
  else answer += '0\n';
}
console.log(answer);

function insertHeap(numToAdd) {
  let idx = heap.length;
  let parent = Math.floor(idx / 2);
  while (idx > 1 && heap[parent] > numToAdd) {
    heap[idx] = heap[parent];
    idx = parent;
    parent = Math.floor(idx / 2);
  }
  heap[idx] = numToAdd;
}

function deleteHeap() {
  const deletedNum = heap[1];
  let lenOfHeap = heap.length;
  heap[1] = heap[lenOfHeap - 1];
  heap.pop();
  lenOfHeap--;
  let parent = 1;
  let child;

  while (parent * 2 < lenOfHeap) {
    child = parent * 2;
    if (heap[child] > heap[child + 1]) child++;
    if (heap[child] > heap[parent]) break;

    [heap[parent], heap[child]] = [heap[child], heap[parent]];
    parent = child;
  }
  return deletedNum;
}