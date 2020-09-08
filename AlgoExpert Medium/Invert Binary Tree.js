/**
Invert Binary Tree

Write a function that takes in a Binary Tree and inverts it. In other words,
the function should swap every left node in the tree for its corresponding
right node.

Each BinaryTree node has an integer value, a left child node, anda. right child node. Children nodes can either be BinaryTree nodes themselves or None/null.
**/

// O(n) Time and O(n) space
function invertBinaryTree(tree) {
  const queue = [tree];

	// repeat while there are still nodes left
	while (queue.length > 0) {

		const node = queue.shift();
		if (node !== null) {
			swap(node);
			queue.push(node.left);
			queue.push(node.right);
		}
	}
}

// used to swap nodes
function swap(node) {
	// store the nodes
	let rightNode = node.right;
	let leftNode = node.left;

	// swap the nodes
	node.left = rightNode;
	node.right = leftNode;
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
exports.invertBinaryTree = invertBinaryTree;
