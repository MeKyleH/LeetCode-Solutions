/**
BST Construction

Write a  BST class for a Binary Search Tree. The class should
support:
- Inserting values with the
- Removing values with the remove method; this method should
only remove the first instance of a given value.
- Searching for values with the  contains method.

Note that you can't remove values from a single-node tree. In other words,
calling the remove method on a single-node tree should simply not
do anything.

Each BST node has an integer value, a left child node, and a right child node. A node is
said to be a valid BST node if and only if it satisfies the BST
property: its value is strictly greater than the values of every
node to its left; its value is less than or equal to the values
of every node to its right; and its children nodes are either valid
BST nodes themselves or None/null.
**/

// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

	// O(log(n)) Time and O(log(n)) or O(d) Space where d is the depth of the right branch to minimum value
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

		// Do not edit the return statement of this method.
    return this;
  }

	// O(log(n)) Time and O(log(n)) or O(d) Space where d is the depth of the right branch to minimum value
  contains(value) {
		// if value is less than current value go left, otherwise go right
		if (value < this.value) {
			if (this.left === null) {
				return false;
			} else {
				return this.left.contains(value);
			}
		} else if (value > this.value) {
			if (this.right === null) {
				return false;
			} else {
				return this.right.contains(value);
			}
		} else {
			return true;
		}
  }

	// O(log(n)) Time and O(log(n)) or O(d) Space where d is the depth of the right branch to minimum value
  remove(value, parentNode = null) {
		// check if this is right or left from the node
		if (value < this.value) {
			if (this.left !== null) {
				// recursively remove down the left branch
				this.left.remove(value, this);
			}
		} else if (value > this.value) { // check the right path
			if (this.right !== null) {
				// recursively remove down the left branch
				this.right.remove(value, this);
			}
		} else { // found the value
			if (this.left !== null && this.right !== null) {
				// find the left value on the right leaf
				this.value = this.right.getBranchMinValue();
				this.right.remove(this.value, this);
			} else if (parentNode === null) { // found value is root node
				if (this.left !== null) {
					this.value = this.left.value;
					this.right = this.left.right;
					this.left = this.left.left;
				} else if (this.right !== null) {
					this.value = this.right.value;
					this.left = this.right.left;
					this.right = this.right.right;
				} else {
					// there is only a root node so don't do anything
				}
			} else if (parentNode.left === this) {
				parentNode.left = this.left !== null ? this.left : this.right;
			} else if (parentNode.right === this) {
				parentNode.right = this.left !== null ? this.left : this.right;
			}
		}

    // Do not edit the return statement of this method.
    return this;
  }

	getBranchMinValue() {
		let currentNode = this;
		while (currentNode.left !== null) {
			currentNode = currentNode.left;
		}
		return currentNode.value;
	}
}

// Do not edit the line below.
exports.BST = BST;
