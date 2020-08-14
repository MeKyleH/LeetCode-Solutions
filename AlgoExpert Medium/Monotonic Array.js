/**
Monotonic Array

Write a function that takes in an array of integers and returns a boolean
representing whether the array is monotonic.

An array is said to be monotonic if its elements, from left to right, are
entirely non-increasing or entirely non-decreasing.

Example 1:
Input:
array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]

Output:
true
**/

function isMonotonic(array) {
	let hasSetIncreasing = false;
	let isIncreasing = false;

	// loop through the array
	for (let i = 0; i < array.length - 1; i++) {
		// skip if equal
		if (array[i] === array[i + 1]) {
			continue;
		}
		// check if we have set increasing or not
		if (!hasSetIncreasing) {
			hasSetIncreasing = true;
			isIncreasing = array[i] < array[i + 1];
		}
		// check if they are still in the same direction
		if (isIncreasing !== (array[i] < array[i + 1])) {
			return false;
		}
	}
	return true;
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;
