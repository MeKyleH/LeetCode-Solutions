/**
Minimum Depth of Binary Tree

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its minimum depth = 2.
**/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    const stack = [{ node: root, depth: 1}];
    let minDepth = Infinity;

    // loop through the tree tracking depth each time
    while (stack.length > 0) {
        const {node, depth} = stack.pop();
        if (node === null) {
            continue;
        }
        // when reach a leaf update the min depth
        if (node.left === null && node.right === null) {
            minDepth = Math.min(minDepth, depth);
        } else {
            // add child nodes
            stack.push({ node: node.left, depth: depth + 1 });
            stack.push({ node: node.right, depth: depth + 1 });
        }
    }
    return minDepth === Infinity ? 0 : minDepth;
};
