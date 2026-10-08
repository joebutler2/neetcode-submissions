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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        // find the smallest, counting the number of steps
        let visitedCount = 0
        function recur(root): number | null {
            if(root == null) return null;
            const left = recur(root.left)
            if(++visitedCount == k) return root.val
            const right = recur(root.right)
            return left ?? right
        }
        return recur(root)
    }
}
