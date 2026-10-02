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
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        const [_, isBalanced] = this.isSubtreeBalanced(root, true)
        return isBalanced;
    }

    isSubtreeBalanced(root: TreeNode | null, isBalanced: boolean): [number, boolean] {
        if(root == null) return [0, isBalanced]
        const [leftH, isLeftBalanced] = this.isSubtreeBalanced(root?.left, isBalanced)
        const [rightH, isRightBalanced] = this.isSubtreeBalanced(root?.right, isLeftBalanced)
        const height = Math.max(leftH, rightH) + 1
        return [height, Math.abs(leftH - rightH) <= 1 && isRightBalanced];
    }
}
