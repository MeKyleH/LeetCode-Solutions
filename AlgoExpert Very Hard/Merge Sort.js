/**
Merge Sort

Write a function that takes in an array of integers and returns a sorted
version of that array. Use the Merge Sort algorithm to sort the array.

Example:
Input:
array = [8, 5, 2, 9, 5, 6, 3]
Output:
[2, 3, 5, 5, 6, 8, 9]
**/

// O(nlog(n)) Time O(nlog(n)) Space
function mergeSort(array) {
	// base case
	if (array.length <= 1) {
		return array;
	}
	// divide the array into two halfs
	const halfIndex = Math.floor(array.length / 2);

	const firstHalf = array.slice(0, halfIndex);
	const secondHalf = array.slice(halfIndex);

	// join the final splitted arrays
	return joinSortedArrays(mergeSort(firstHalf), mergeSort(secondHalf));
}

function joinSortedArrays(firstHalf, secondHalf) {
	const sortedArray = [];
	let pointer1 = 0;
	let pointer2 = 0;

	// repeat until we get through one of the arrays
	while (pointer1 < firstHalf.length && pointer2 < secondHalf.length) {
		const value1 = firstHalf[pointer1];
		const value2 = secondHalf[pointer2];

		// add the lesser value to the final sorted array
		if (value1 <= value2) {
			sortedArray.push(value1);
			pointer1++;
		} else {
			sortedArray.push(value2);
			pointer2++
		}
	}

	// repeat for the longer array of the two
	while (pointer1 < firstHalf.length) {
		sortedArray.push(firstHalf[pointer1]);
		pointer1++;
	}

	while (pointer2 < secondHalf.length) {
		sortedArray.push(secondHalf[pointer2]);
		pointer2++
	}

	return sortedArray;
}

// Do not edit the line below.
exports.mergeSort = mergeSort;
