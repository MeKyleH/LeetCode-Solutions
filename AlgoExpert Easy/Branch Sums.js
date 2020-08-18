/**
Branch Sums

Write a function that takes in a Binary Tree and returns a list of its branch
sums ordered from leftmost branch sum to rightmost branch sum.

A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree
branch is a path of nodes in a tree that starts at the root node and ends at
any leaf node.

Each BinaryTree node has an integer value, a left child node, and a right child node.
Children nodes can either be BinaryTree nodes themselves or None/null.

Example:
Input:

       1
	2         3
 4      5  6   7
8  9  10
**/

// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(n) Time and O(n) Space
function branchSums(root) {
	const sumsArray = [];
	const runningTotal = 0;

	sumsHelper(root, sumsArray, runningTotal);
	return sumsArray;
}

// depth first search
function sumsHelper(root, sumsArray, runningTotal) {
	// base case - stop if there is nothing
	if (!root) {
		return;
	}

	// add current value to running total
	const newTotal = runningTotal + root.value;

	// when at a leaf push the total into the sums array
	if (!root.left && !root.right) {
		return sumsArray.push(newTotal);
	}
	// recursive call for left and right
	sumsHelper(root.left, sumsArray, newTotal);
	sumsHelper(root.right, sumsArray, newTotal);
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
