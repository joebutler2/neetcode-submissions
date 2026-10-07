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
    isValidBST(root: TreeNode | null): boolean {        
        function recur(root: TreeNode | null, min: number, max: number = Number.MAX_SAFE_INTEGER) {
            if(root == null) return true;
            if(min >= root.val) return false;
            if(max <= root.val) return false;

            return recur(root.left, min, root.val) && 
                   recur(root.right, root.val, max);
        }
        return recur(root.left, Number.MIN_SAFE_INTEGER, root.val) &&
            recur(root.right, root.val);
    }
}
