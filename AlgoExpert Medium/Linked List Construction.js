/**
Linked List Construction

Write a DoublyLinkedList class that has a head and a tail, both of which point to either a liinked list Node or None/null.
The class should support:

	- Setting the head and tail of the linked list.

	- Inserting nodes before and after other nodes as well as at given positions
	(the position of the head node is 1
	- Removing given nodes and removing nodes with given values.
	- Searching for nodes with given values.

Note that the setHead, setTail, insertBefore, insertAfter, insertAtPosition, and remove methods all take in actual Nodes as input parameters—not integers (except for
insertAtPosition, which also takes in an integer representing the
position); this means that you don't need to create any new Nodes
in these methods. The input nodes can be either stand-alone nodes or nodes
that are already in the linked list. If they're nodes that are already in the
linked list, the methods will effectively be moving the nodes within
the linked list. You won't be told if the input nodes are already in the
linked list, so your code will have to defensively handle this scenario.

If you're doing this problem in an untyped language like Python or JavaScript,
you may want to look at the various function signatures in a typed language
like Java or TypeScript to get a better idea of what each input parameter is.

Each Node has an integer value as well as a prev node and a next node, both of which can point to either another node or None/null.

Example:
Input:
// Assume the following linked list has already been created:
1 <-> 2 <-> 3 <-> 4 <-> 5
// Assume that we also have the following stand-alone nodes:
3, 3, 6
**/

// This is an input class. Do not edit.
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
		if (this.head === null) {
			this.head = node;
			this.tail = node;
		} else {
    	this.insertBefore(this.head, node);
		}
  }

  setTail(node) {
		if (this.tail === null) {
			this.setHead(node);
		} else {
    	this.insertAfter(this.tail, node);
		}
  }

  insertBefore(node, nodeToInsert) {
		if (nodeToInsert === this.head && nodeToInsert === this.tail) {
			return;
		}

		// remove the nodeToInsert in case it is existing
		this.remove(nodeToInsert);

		// update the current node bindings
		nodeToInsert.prev = node.prev;
		nodeToInsert.next = node;

		// update other node bindings
		if (node.prev === null) {
			this.head = nodeToInsert;
		} else {
			node.prev.next = nodeToInsert;
		}

		node.prev = nodeToInsert;
  }

  insertAfter(node, nodeToInsert) {
		if (nodeToInsert === this.head && nodeToInsert === this.tail) {
			return;
		}

		// remove the nodeToInsert in case it is existing
		this.remove(nodeToInsert);

		// update the current node bindings
		nodeToInsert.prev = node;
		nodeToInsert.next = node.next;

		// update the other node bindings
		if (node.next === null) {
			this.tail = nodeToInsert;
		} else {
			node.next.prev = nodeToInsert;
		}
		node.next = nodeToInsert;
  }

  insertAtPosition(position, nodeToInsert) {
		// check that we're not replacing the head
		if (position === 1) {
			this.setHead(nodeToInsert);
			return;
		}

		let currentNode = this.head;
		let counter = 1;
		// loop until we're at the correct position
		while(currentNode !== null && counter++ !== position) {
			currentNode = currentNode.next;
		}

		if (currentNode !== null) {
			this.insertBefore(currentNode, nodeToInsert);
		} else {
			this.setTail(nodeToInsert);
		}
	}

  removeNodesWithValue(value) {
    let currentNode = this.head;

		// loop through the links and remove the nodes
		while (currentNode !== null) {
			const oldNode = currentNode;
			currentNode = currentNode.next;
			if (oldNode.value === value) {
				this.remove(oldNode);
			}
		}
  }

  remove(node) {
		// check head and tail properties to update
		if (node === this.head) {
			this.head = this.head.next;
		}
		if (node === this.tail) {
			this.tail = this.tail.prev;
		}

		this.removeNodeBindings(node);
  }

	// O(n) Time and O(1) Space
  containsNodeWithValue(value) {
		let currentNode = this.head;
		// continue moving from head to tail looing for the value
		while(currentNode !== null && currentNode.value !== value) {
			currentNode = currentNode.next;
		}
		return currentNode !== null;
  }

	removeNodeBindings(node) {
		// update references of linked nodes

		// update previous node's bindings
		if (node.prev !== null) {
			node.prev.next = node.next;
		}

		// update next node's bindings
		if (node.next !== null) {
			node.next.prev = node.prev;
		}

		// remove this nodes pointers
		node.next = null;
		node.prev = null;
	}
}

// Do not edit the lines below.
exports.Node = Node;
exports.DoublyLinkedList = DoublyLinkedList;
