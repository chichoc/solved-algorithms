// https://leetcode.com/problems/count-good-nodes-in-binary-tree?envType=study-plan-v2&envId=leetcode-75

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  let answer = 0;

  const checkGoodNodes = (node, max) => {
    if (!node) return;
    if (node.val >= max) answer++;
    checkGoodNodes(node.left, Math.max(node.val, max));
    checkGoodNodes(node.right, Math.max(node.val, max));
  };

  checkGoodNodes(root, root.val);

  return answer;
};
