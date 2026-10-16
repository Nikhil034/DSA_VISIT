/*
Given the root of a binary tree and an integer targetSum, return true if the
tree has a root-to-leaf path whose values add up to targetSum.

A leaf is a node with no children.
*/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function hasPathSum(root, targetSum) {
  if (root === null) {
    return false;
  }

  const remainingSum = targetSum - root.val;

  if (root.left === null && root.right === null) {
    return remainingSum === 0;
  }

  return (
    hasPathSum(root.left, remainingSum) ||
    hasPathSum(root.right, remainingSum)
  );
}

// Example tree:
//          5
//        /   \
//       4     8
//      /     / \
//     11    13  4
//    /  \         \
//   7    2         1
const root = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
  new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
);

const targetSum = 22;
console.log(hasPathSum(root, targetSum)); // true (5 -> 4 -> 11 -> 2)
