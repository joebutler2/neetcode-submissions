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
     * @return {number}
     */
    goodNodes(root: TreeNode | null): number {
        if(root == null) return 0;
        let count = 0; // Root meets this criteria
        function recur(root: TreeNode | null, max): void {
            if(root == null) return;
            if(root.val >= max) count++;
            max = Math.max(max, root.val);
            recur(root.left, max);
            recur(root.right, max);
        };
        recur(root, root.val);
        return count;
    }
}
