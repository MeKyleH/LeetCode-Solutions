/**
Binary Tree Vertical Order Traversal

Given a binary tree, return the vertical order traversal of its nodes' values. (ie, from top to bottom, column by column).

If two nodes are in the same row and column, the order should be from left to right.

Examples 1:

Input: [3,9,20,null,null,15,7]

   3
  /\
 /  \
 9  20
    /\
   /  \
  15   7

Output:

[
  [9],
  [3,15],
  [20],
  [7]
]
Examples 2:

Input: [3,9,8,4,0,1,7]

     3
    /\
   /  \
   9   8
  /\  /\
 /  \/  \
 4  01   7

Output:

[
  [4],
  [9],
  [3,0,1],
  [8],
  [7]
]
Examples 3:

Input: [3,9,8,4,0,1,7,null,null,null,2,5] (0's right child is 2 and 1's left child is 5)

     3
    /\
   /  \
   9   8
  /\  /\
 /  \/  \
 4  01   7
    /\
   /  \
   5   2

Output:

[
  [4],
  [9,5],
  [3,0,1],
  [8,2],
  [7]
]
**/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// let childIndex1 = (2 * i) + 1;
// let childIndex2 = (2 * i) + 2;
// let parentIndex = Math.floor((i - 1) / 2)

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function(root) {
    // handle null root case
    if (root === null) {
        return [];
    }

    // initialize values for tracking results
    const results = {};
    let minDepth = Infinity;
    let maxDepth = -Infinity;

    // initialize a queue with root
    const queue = [{ node: root, depth: 0 }];

    // traverse the queue until empty
    while (queue.length > 0) {
        // get the current top of the queue
        const currentNode = queue.shift();

        // add the current node
        if (!results[currentNode.depth]) {
            results[currentNode.depth] = [];
        }
        results[currentNode.depth].push(currentNode.node.val);

        // track the min/max depth
        minDepth = Math.min(minDepth, currentNode.depth);
        maxDepth = Math.max(maxDepth, currentNode.depth);

        // check if there is a left node and add to queue if so
        if (currentNode.node.left !== null) {
            queue.push({ node: currentNode.node.left, depth: currentNode.depth - 1 });
        }
        // check if there is a right node and add to queue if so
        if (currentNode.node.right !== null) {
            queue.push({ node: currentNode.node.right, depth: currentNode.depth + 1 });
        }
    }

    // convert object result into array
    const resultsArray = [];
    for (let i = minDepth; i <= maxDepth; i++) {
        resultsArray.push(results[i]);
    }

    return resultsArray;
};
