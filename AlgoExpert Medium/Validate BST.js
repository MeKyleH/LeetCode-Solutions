/**
Validate BST

Write a function that takes in a potentially invalid Binary Search Tree (BST)
and returns a boolean representing whether the BST is valid.

Each BST node has an integer value, a left chiild node, and a right child node. A node is
said to be a valid BST node if and only if it satisfies the BST
property: its value is strictly greater than the values of every
node to its left; its value is less than or equal to the values
of every node to its right; and its children nodes are either valid BST nodes themselves or None/null

A BST is valid if and only if all of its nodes are valid
**/

// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
	return validateHelper(tree, -Infinity, Infinity);
}

function validateHelper(tree, min, max) {
	// base case for when you reach a leaf
	if (tree === null) {
		return true;
	}

	// check that this node is value
	if (tree.value < min || tree.value >= max) {
		return false;
	}

	// check if the left and right nodes are valid
	const isLeftValid = validateHelper(tree.left, min, tree.value);
	const isRightValid = validateHelper(tree.right, tree.value, max);

	// return whether the right and left are value
	return isLeftValid && isRightValid;
}

// Do not edit the line below.
exports.BST = BST;
exports.validateBst = validateBst;
