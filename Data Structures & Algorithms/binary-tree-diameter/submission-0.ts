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
    diameterOfBinaryTree(root: TreeNode | null): number {
        const [_, diameter] = this.helper(root, 0)
        return diameter
    }

    helper(root: TreeNode | null, maxDiameter: number) {
        if(root == null) return [0, maxDiameter]
        let [leftH, leftMax] = this.helper(root.left, maxDiameter)
        let [rightH, rightMax] = this.helper(root.right, leftMax)
        return [
            Math.max(leftH, rightH) + 1,
            Math.max(rightMax, leftH + rightH)
        ]
    }
}
