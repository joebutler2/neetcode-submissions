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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        if(root == null) return [];
        const result = []
        const queue = [root]
        let front = 0

        while(front < queue.length) {
            let rowLength = queue.length - front;
            const row = []
            while(rowLength > 0) {
                let current = queue[front++]
                row.push(current.val)
                if(current.left != null) {
                    queue.push(current.left)
                }
                if(current.right != null) {
                    queue.push(current.right)
                }
                rowLength--;
            }
            result.push(row);
        }
        return result;
    }
}
