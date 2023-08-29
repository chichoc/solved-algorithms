const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const T = +inputs[0];
const answer = [];

for (let i = 1; i <= T * 3; i += 3) {
  const n = +inputs[i];
  const [preorder, inorder] = inputs.slice(i + 1, i + 3).map((input) => input.split(' ').map(Number));
  const postorder = [];
    
  getPostorder(preorder, inorder, postorder, 0, 0, n);
  answer.push(postorder.join(' '));
}

function getPostorder(preorder, inorder, postorder, root, start, end) {
  for (let i = start; i < end; i++) {
    if (preorder[root] === inorder[i]) {
      getPostorder(preorder, inorder, postorder, root + 1, start, i);
      getPostorder(preorder, inorder, postorder, root + i + 1 - start, i + 1, end);
      postorder.push(preorder[root]);
    }
  }
}

console.log(answer.join('\n'));