/**
Closest Binary Search Tree Value

Given a non-empty binary search tree and a target value, find the value in the BST that is closest to the target.

Note:
Given target value is a floating point.
You are guaranteed to have only one unique value in the BST that is closest to the target.
Example:

Input: root = [4,2,5,1,3], target = 3.714286

    4
   / \
  2   5
 / \
1   3

Output: 4
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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    let closest = Number.MAX_SAFE_INTEGER;
    let closestDiff = Number.MAX_SAFE_INTEGER;

    let stack = [root];
    while (stack.length > 0) {
        let node = stack.shift();
        let nodeValue = node.val;
        let diff = Math.abs(nodeValue - target);

        if (diff < closestDiff) {
            closest = nodeValue;
            closestDiff = diff;
        }

        if (node.left) {
            stack.push(node.left);
        }
        if (node.right) {
            stack.push(node.right);
        }
    }
    return closest;
};
