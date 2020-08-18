/**
Node Depths

The distance between a node in a Binary Tree and the tree's root is called the
node's depth.

Write a function that takes in a Binary Tree and returns the sum of its nodes'
depths.

Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None/null.

Example:
       1
	 2      3
 4   5   6  7
8  9
Output:
16
**/

// O(N) Time and O(d) Space
function nodeDepths(root) {
  let sum = 0;
	const stack = [{ node: root, depth: 0 }];
	// while the queue has something in it repeat
	while (stack.length > 0) {
		const {node, depth} = stack.pop();
		if (node === null) {
			continue;
		}
		sum += depth;
		// add the left and right to the queue and add their depths
		stack.push({ node: node.left, depth: depth + 1 });
		stack.push({ node: node.right, depth: depth + 1 });
	}
	return sum;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
