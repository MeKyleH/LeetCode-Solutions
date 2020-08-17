/**
Binary Search

Write a function that takes in a sorted array of integers as well as a target
integer. The function should use the Binary Search algorithm to determine if
the target integer is contained in the array and should return its index if it
is, otherwise -1.


If you're unfamiliar with Binary Search, we recommend watching the Conceptual
Overview section of this question's video explanation before starting to code.

Example 1:
Input:
array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
target = 33
Output:
3
**/

// O(log(n)) Time and O(1) Space
function binarySearch(array, target) {
	let leftIndex = 0;
	let rightIndex = array.length - 1;
	let middleIndex = setMiddleIndex(leftIndex, rightIndex)

	if (array[0] === target) {
		return 0;
	}
	if (array[array.length - 1] === target) {
		return array.length - 1;
	}

  // while the left index is less than the right keep updating the numbers
	while (leftIndex < rightIndex) {
		// check for the new number
		if (array[middleIndex] === target) {
			return middleIndex;
		}

		if (array[middleIndex] < target) {
			leftIndex = middleIndex;
		} else {
			rightIndex = middleIndex;
		}
		middleIndex = setMiddleIndex(leftIndex, rightIndex);
		if (middleIndex === rightIndex || middleIndex === leftIndex) {
			break;
		}
	}
	return -1;
}

function binarySearch2(array, target) {
	let leftIndex = 0;
	let rightIndex = array.length - 1;
	let middleIndex = setMiddleIndex(leftIndex, rightIndex)

  // while the left index is less than the right keep updating the numbers
	while (leftIndex <= rightIndex) {
		// check for the new number
		if (array[middleIndex] === target) {
			return middleIndex;
		}

		if (array[middleIndex] < target) {
			leftIndex = middleIndex + 1;
		} else {
			rightIndex = middleIndex - 1;
		}
		middleIndex = setMiddleIndex(leftIndex, rightIndex);
	}
	return -1;
}

function setMiddleIndex(leftIndex, rightIndex) {
	return Math.floor((leftIndex + rightIndex) / 2);
}

// Do not edit the line below.
exports.binarySearch = binarySearch;
