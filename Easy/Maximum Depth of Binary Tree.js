/**
Maximum Depth of Binary Tree

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
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
var maxDepth = function(root) {
    const stack = [{ node: root, depth: 1 }];
    let maxDepth = -Infinity;

    // loop through the binary tree until we've checked all nodes
    while (stack.length > 0) {
        const { node, depth } = stack.pop();

        if (node === null) {
            continue;
        }
        // if at a leaf compare the depth
        if (node.left === null && node.right === null) {
            maxDepth = Math.max(maxDepth, depth);
        }

        // add child nodes to the stack
        stack.push({ node: node.left, depth: depth + 1 });
        stack.push({ node: node.right, depth: depth + 1 });
    }

    //return the maxDepth or 0 if empty tree
    return maxDepth === -Infinity ? 0 : maxDepth;
};
