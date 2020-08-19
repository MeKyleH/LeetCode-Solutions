/**
Quick Sort

Write a function that takes in an array of integers and returns a sorted
version of that array. Use the Quick Sort algorithm to sort the array.
**/

// Worst O(n^2) Best/Average O(nlog(n)) Time and O(log(n)) Space
function quickSort(array) {
	sortHelper(array, 0, array.length - 1);
	return array;
}

function sortHelper(array, startIndex, endIndex) {
	let pointerIndex = startIndex;
	let leftIndex = startIndex + 1;
	let rightIndex = endIndex;

	if (startIndex >= endIndex) {
		return;
	}

	// while the leftIndex < rightIndex continue looping
	while (leftIndex <= rightIndex) {
		const pointerValue = array[pointerIndex];
		const leftValue = array[leftIndex];
		const rightValue = array[rightIndex];

		// perform swap checks
		if (rightValue < pointerValue && leftValue > pointerValue) {
			swap(array, leftIndex, rightIndex);
		}
		if (leftValue <= pointerValue) {
			leftIndex++;
		}
		if (rightValue >= pointerValue) {
			rightIndex--;
		}
	}
	// swap pointer and right
	swap(array, rightIndex, pointerIndex);
	const leftSubArrLength = rightIndex - 1 - startIndex;
	const rightSubArrLength = endIndex - rightIndex + 1;

	// sort the smaller subarray first to limit calls in callstack
	if (leftSubArrLength < rightSubArrLength) {
		sortHelper(array, startIndex, rightIndex - 1);
		sortHelper(array, rightIndex + 1, endIndex);
	} else {
		sortHelper(array, rightIndex + 1, endIndex);
		sortHelper(array, startIndex, rightIndex - 1);
	}
}

function swap(array, i, j) {
	const tempValue = array[i];
	array[i] = array[j];
	array[j] = tempValue;
}

// Do not edit the line below.
exports.quickSort = quickSort;
