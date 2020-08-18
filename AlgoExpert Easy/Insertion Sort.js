/**
Insertion Sort

Write a function that takes in an array of integers and returns a sorted
version of that array. Use the Insertion Sort algorithm to sort the array.

If you're unfamiliar with Insertion Sort, we recommend watching the Conceptual
Overview section of this question's video explanation before starting to code.

Example 1:
Input:
array = [8, 5, 2, 9, 5, 6, 3]
Output:
[2, 3, 5, 5, 6, 8, 9]
**/

// O(n^2) Time and O(1) Space
function insertionSort(array) {
  // loop through the array
	for (let i = 0; i < array.length; i++) {
		// compare the currentIndex with the previous indices and loop backwards
		for (let j = i; j > 0; j--) {
			if (array[j] < array[j - 1]) {
				const tempValue = array[j];
				array[j] = array[j - 1];
				array[j - 1] = tempValue;
			}
		}
	}
	return array;
}

// Do not edit the line below.
exports.insertionSort = insertionSort;
