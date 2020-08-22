/**
Reverse Linked List

Write a function that takes in the head of a Singly Linked List, reverses the
list in place (i.e., doesn't create a brand new list), and returns its new head.

Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None/null if it's the tail of the list.

You can assume that the input Linked List will always have at least one node; in other
words, the head will never be None/null.
**/

// O(n) Time and O(1) Space
function reverseLinkedList(head) {
  let leftPointer = null;
	let middlePointer = head;

	// repeat until we get to middle pointer past the tail
	while (middlePointer !== null) {
		let rightPointer = middlePointer.next;
		middlePointer.next = leftPointer;
		leftPointer = middlePointer;
		middlePointer = rightPointer;
	}

	return leftPointer;
}

// Do not edit the line below.
exports.reverseLinkedList = reverseLinkedList;
