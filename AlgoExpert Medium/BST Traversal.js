/**
BST Traversal

Write three functions that take in a Binary Search Tree (BST) and an empty
array, traverse the BST, add its nodes' values to the input array, and return
that array. The three functions should traverse the BST using the in-order,
pre-order, and post-order tree-traversal techniques, respectively.

Each BST node has an integer value, a left chiild node, and a right child node. A node is
said to be a valid BST node if and only if it satisfies the BST
property: its value is strictly greater than the values of every
node to its left; its value is less than or equal to the values
of every node to its right; and its children nodes are either valid BST nodes themselves or None/null

Example:
tree = 10
   5       15
 2   5        22
1

Output:
inOrderTraverse: [1, 2, 5, 5, 10, 15, 22]
preOrderTraverse: [10, 5, 2, 1, 5, 15, 22]
postOrderTraverse: [1, 2, 5, 5, 22, 15, 10]
**/

// O(n) Time and O(n) Space
function inOrderTraverse(tree, array) {
  // base case: check that there is a value on the tree
	if (tree !== null) {
		// traverse the left branch
		inOrderTraverse(tree.left, array);
		// add the current node value
		array.push(tree.value);
		// traverse the right branch
		inOrderTraverse(tree.right, array);
	}
	return array;
}

function preOrderTraverse(tree, array) {
  // base case: check that there is a value on the tree
	if (tree !== null) {
		// add the current node value
		array.push(tree.value);
		// traverse the left branch
		preOrderTraverse(tree.left, array);
		// traverse the right branch
		preOrderTraverse(tree.right, array);
	}
	return array;}

function postOrderTraverse(tree, array) {
  // base case: check that there is a value on the tree
	if (tree !== null) {
		// traverse the left branch
		postOrderTraverse(tree.left, array);
		// traverse the right branch
		postOrderTraverse(tree.right, array);
		// add the current node value
		array.push(tree.value);
	}

	return array;}

// Do not edit the lines below.
exports.inOrderTraverse = inOrderTraverse;
exports.preOrderTraverse = preOrderTraverse;
exports.postOrderTraverse = postOrderTraverse;
