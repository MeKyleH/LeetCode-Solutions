/**
Min Height BST

Write a function that takes in a non-empty sorted array of distinct integers,
constructs a BST from the integers, and returns the root of the BST.

The function should minimize the height of the BST.

You've been provided with a BST class that you'll have to use to
construct the BST.

Each BST node has an integer value, a left child node, and a right child node. A node is
said to be a valid BST node if and only if it satisfies the BST
property: its value is strictly greater than the values of every
node to its left; its value is less than or equal to the values
of every node to its right; and its children nodes are either valid
BST nodes themselves or None/null.

A BST is valid if and only if all of its nodes are valid BST nodes.

Note that the BST class already has an insert method which you can use if you uwant.

Example:
Input:
array = [1, 2, 5, 7, 10, 13, 14, 15, 22]
Output:
				 10
		 /     \
		2      14
	/   \   /   \
 1     5 13   15
				\       \
				 7      22
// This is one example of a BST with min height

**/

// O(n) Time and O(n) Space
function minHeightBst(array) {
	return BSTCreationHelper(array, 0, array.length - 1);
}

function BSTCreationHelper(array, leftIndex, rightIndex) {
	// handle base case
	if (leftIndex > rightIndex) {
		return null;
	}

	// find middle index
	const midIndex = Math.floor((leftIndex + rightIndex) / 2);

	// add the current value to the tree
	const thisNode = new BST(array[midIndex]);

	// recursively insert remaining values
	thisNode.left = BSTCreationHelper(array, leftIndex, midIndex - 1);
	thisNode.right = BSTCreationHelper(array, midIndex + 1, rightIndex);
	return thisNode;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

// Do not edit the line below.
exports.minHeightBst = minHeightBst;
