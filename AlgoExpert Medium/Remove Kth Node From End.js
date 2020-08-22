/**
Remove Kth Node From End

Write a function that takes in the head of a Singly Linked List and an integer k and removes the kth node from the end of the list.

The removal should be done in place, meaning that the original data structure
should be mutated (no new structure should be created).

Furthermore, the input head of the linked list should remain the head of the
linked list after the removal is done, even if the head is the node that's
supposed to be removed. In other words, if the head is the node that's
supposed to be removed, your function should simply mutate its value and next pointer.

Note that your function doesn't need to return anything.

You can assume that the input Linked List will always have at least two nodes
and, more specifically, at least k nodes.

Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None/null if it's the tail of the list.

Example:
Input:
head = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9
Output:
0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 7 -> 8 -> 9
**/

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
	let nodeCount = 1;
	let node = head;
  // find how many nodes are in the list
	while (node.next !== null) {
		node = node.next;
		nodeCount++;
	}

	// calculate how many nodes into the list is the kth node
	const nodeToRemoveIndex = nodeCount - k;

	node = head;
	let parent = node;

	// deal with head node removal
	if (nodeToRemoveIndex === 0) {
		node = node.next;
		head.value = node.value;
		head.next = node.next;
		return;
	}

	// loop until we get to the kth node
	for (let i = 0; i < nodeToRemoveIndex; i++) {
		parent = node;
		node = node.next;
	}

	// remove the node from the list
	let child = node.next;
	parent.next = child;
	node.next = null;
}

// Do not edit the line below.
exports.LinkedList = LinkedList;
exports.removeKthNodeFromEnd = removeKthNodeFromEnd;
