/**
Bubble Sort

Write a function that takes in an array of integers and returns a sorted
version of that array. Use the Bubble Sort algorithm to sort the array.

If you're unfamiliar with Bubble Sort, we recommend watching the Conceptual
Overview section of this question's video explanation before starting to code.

Example 1:
Input:
array = [8, 5, 2, 9, 5, 6, 3]
Output:
[2, 3, 5, 5, 6, 8, 9]
**/

// 0(n^2) Time and O(1) Space
function bubbleSort(array) {
	let hasSwapped = true;
  // while swaps have been performed
	while (hasSwapped) {
		hasSwapped = false;
		// loop through the array
		for (let i = 0; i < array.length - 1; i++) {
			// check that the current and next are sorted
			if (array[i] > array[i + 1]) {
				// swap indices and set swapped flag
				const temp = array[i];
				array[i] = array[i + 1];
				array[i + 1] = temp;
				hasSwapped = true
			}
		}
	}

	return array;
}

function bubbleSort2(array) {
	let hasSwapped = true;
	let counter = 0; // optimization since the end one will always be the largest after each pass

  // while swaps have been performed
	while (hasSwapped) {
		hasSwapped = false;
		// loop through the array
		for (let i = 0; i < array.length - 1 - counter; i++) {
			// check that the current and next are sorted
			if (array[i] > array[i + 1]) {
				// swap indices and set swapped flag
				const temp = array[i];
				array[i] = array[i + 1];
				array[i + 1] = temp;
				hasSwapped = true
			}
		}
		counter++;
	}

	return array;
}


// Do not edit the line below.
exports.bubbleSort = bubbleSort;
