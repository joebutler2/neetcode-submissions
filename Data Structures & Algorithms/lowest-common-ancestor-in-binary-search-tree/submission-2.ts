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

// interface TreeNode {
//     val: number;
//     left: TreeNode | null;
//     right: TreeNode | null;
// }

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(
        root: TreeNode | null,
        p: TreeNode | null,
        q: TreeNode | null,
    )//: TreeNode | null
     {
        if(root == null) return null;
        if(p === root) return p;
        if(q === root) return q;
        // root > q; OB
        if(q.val < root.val && root.val < p.val) {
            return root;
        }
        if(root.val > q.val) {
            return this.lowestCommonAncestor(root.left, p, q);
        }
        // root < p; too semall
        if(root.val < p.val) {
            return this.lowestCommonAncestor(root.right, p, q);
        }
    console.log(root.val)

        return root;
    }
}
