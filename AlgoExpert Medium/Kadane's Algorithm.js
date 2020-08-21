/**
Kadane's Algorithm

Write a function that takes in a non-empty array of integers and returns the
maximum sum that can be obtained by summing up all of the integers in a non-empty
subarray of the input array. A subarray must only contain adjacent numbers.

Example:
Input:
array = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]
Output:
19 // [1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1]
**/

// maxEndingHere = Math.max(maxEndingHere + currentNum, currentNum);
// O(n) Time and O(1) space
function kadanesAlgorithm(array) {
	let currentMax = 0;
	let totalMaxSum = array[0];

	// loop through the array
	for (let i = 0; i < array.length; i++) {
		const currentNum = array[i];
		// compare the new currentMax against the previousMax
		currentMax = Math.max(currentNum, currentMax + currentNum);
		totalMaxSum = Math.max(currentMax, totalMaxSum);
	}
	return totalMaxSum;
}

// Do not edit the line below.
exports.kadanesAlgorithm = kadanesAlgorithm;
