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
   * @return {number[]}
   * 6m - main setup
   */
  rightSideView(root: TreeNode | null): number[] {
    if (root == null) return [];
    const result = [];
    function recur(root: TreeNode | null, depth: number = 0) {
      if (root == null) return depth;
      if (result[depth] == null) {
        result.push(root.val);
      }
      const rightDepth = recur(root.right, depth + 1);
      const leftDepth = recur(root.left, depth + 1);
    //   if (result[rightDepth] == null) {
    //     result.push(root.right.val);
    //   } else if (result[rightDepth] == null) {
    //     result.push(root.left.val);
    //   }
    }
    recur(root)

    return result;
  }
}
