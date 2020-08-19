/**
Max Subset Sum No Adjacent

Write a function that takes in an array of positive integers and returns the
maximum sum of non-adjacent elements in the array.

If a sum can't be generated, the function should return

Example:
Input:
array = [75, 105, 120, 75, 90, 135]
Output:
330 // 75 + 120 + 135
**/

function maxSubsetSumNoAdjacent(array) {
	if (array.length === 0) {
		return 0;
	}
	const maxSumsArray = [];

	// base case of the first maxSum
	maxSumsArray.push(array[0]);

	// base case of the second maxSum between the first two indices
	if (array.length > 1) {
		maxSumsArray.push(array[0] > array[1] ? array[0] : array[1]);
	}

  // loop through the array
	for (let i = 2; i < array.length; i++) {
		// find and add the newest largest sum
		const max1 = maxSumsArray[i - 1];
		const max2 = maxSumsArray[i - 2] + array[i];

		maxSumsArray.push(max1 > max2 ? max1 : max2);
	}
	return maxSumsArray[maxSumsArray.length - 1];
}

// Do not edit the line below.
exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;
