/**
Selection Sort

Write a function that takes in an array of integers and returns a sorted
version of that array. Use the Selection Sort algorithm to sort the array.

Example:
Input:
array = [8, 5, 2, 9, 5, 6, 3]
Output:
[2, 3, 5, 5, 6, 8, 9]
**/

// O(n^2) Time and O(1) Space
function selectionSort(array) {
  // loop through the array - sorted subarray
	for (let i = 0; i < array.length; i++) {
		let lowestIndex = i;
		// loop through the array again - unsorted subarray
		for (let j = i; j < array.length; j++) {
			// check if the current index is lower than our lowest
			if (array[j] < array[lowestIndex]) {
				lowestIndex = j;
			}
		}
		// do the swap
		const tempValue = array[i];
		array[i] = array[lowestIndex];
		array[lowestIndex] = tempValue;
	}
	return array;
}

// Do not edit the line below.
exports.selectionSort = selectionSort;
