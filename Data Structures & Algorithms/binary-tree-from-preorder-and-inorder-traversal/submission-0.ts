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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder: number[], inorder: number[]): TreeNode {
        // preorder -> root, left, right
        // inorder -> left, root, right
        const n = preorder.length;
        const lookup = {};
        for(let i = 0; i < n; i++) {
            lookup[inorder[i]] = i;
        }
        // we need at least root, that is the return value
        // we might need a current node,
        function recur(pl, pr, il, ir): TreeNode | null {
            if(pl > pr || il > ir) return null;
            const curVal = preorder[pl];
            const root = new TreeNode(curVal);
            let m = lookup[curVal];
            let leftSize = m - il;

            root.left = recur(pl + 1, pl + leftSize, il, m - 1);
            root.right = recur(pl + leftSize + 1, pr, m + 1, ir);
            return root;
        }
        return recur(0, n - 1, 0, n - 1);
    }
}

// const root = new TreeNode(preorder[i++]);
//         while(i < preorder.length) {
//         if(preorder[i] === inorder[j]) { // is the next node a left child or a right child
//             root.left = new TreeNode(preorder[i++])
//             j += 2
//         } else {
//             root.right = new TreeNode(preorder[i++])
//             j++
//         }
//         }

