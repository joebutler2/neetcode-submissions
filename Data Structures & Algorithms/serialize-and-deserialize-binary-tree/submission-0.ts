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

class Codec {
  /**
   * Encodes a tree to a single string.
   *
   * @param {TreeNode} root
   * @return {string}
   */
  serialize(root: TreeNode | null): string {
    let result = [];
    function recur(root: TreeNode | null, depth: number = 0) {
      if (root == null) {
        result.push(null);
        return;
      }
      // let prefix = result.length === 0 ? "" : ",";
      result.push(root?.val);
      recur(root.left, depth + 1);
      recur(root.right, depth + 1);
    }
    recur(root);
    let tmp = result.map((i) => (i == null ? "#" : i)).join(",");
    console.log(tmp);
    return tmp;
  }

  /**
   * Decodes your encoded data to tree.
   *
   * @param {string} data
   * @return {TreeNode}
   */
  deserialize(data: string): TreeNode {
    const entries = data.split(",").map((i) => parseInt(i));
    let i = 0;
    function createNode(): TreeNode | null {
      if (i >= entries.length) return null;
      let val = entries[i++];
      if (isNaN(val)) return null;
      const current = new TreeNode(val);
      current.left = createNode();
      current.right = createNode();
      return current;
    }
    return createNode();
  }
}
