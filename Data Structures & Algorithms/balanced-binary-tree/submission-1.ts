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
        const [_, isBalanced] = this.isSubtreeBalanced(root)
        return isBalanced;
    }

    isSubtreeBalanced(root: TreeNode | null): [number, boolean] {
        if(root == null) return [0, true]
        const [leftH, isLeftBalanced] = this.isSubtreeBalanced(root?.left)
        const [rightH, isRightBalanced] = this.isSubtreeBalanced(root?.right)
        const height = Math.max(leftH, rightH) + 1
        return [height, Math.abs(leftH - rightH) <= 1 && isLeftBalanced && isRightBalanced];
    }
}
