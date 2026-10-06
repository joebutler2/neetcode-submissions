/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
  /**
   * @param {TreeNode} root
   * @param {TreeNode} subRoot
   * @return {boolean}
   */
  isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    // recur until match found, then run matching function
    if (root == null) return false;

    return (
      this.isSameTree(root, subRoot) ||
      this.isSubtree(root.left, subRoot) ||
      this.isSubtree(root.right, subRoot)
    );
  }

  isSameTree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    // recur until match found, then run matching function
    if (root == null || subRoot == null) return root === subRoot;
    if (root.val !== subRoot.val) return false;

    return (
      this.isSameTree(root.left, subRoot.left) &&
      this.isSameTree(root.right, subRoot.right)
    );
  }
}
