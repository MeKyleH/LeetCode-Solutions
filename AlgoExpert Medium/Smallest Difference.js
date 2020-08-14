/**
Smallest Difference

Write a function that takes in two non-empty arrays of integers, finds the
pair of numbers (one from each array) whose absolute difference is closest to
zero, and returns an array containing these two numbers, with the number from
the first array in the first position.

You can assume that there will only be one pair of numbers with the smallest
difference.

Example 1:
Input:
arrayOne = [-1, 5, 10, 20 28, 3];
arrayTwo = [26, 134, 135, 15, 17];

Output:
[28, 26];
**/

function smallestDifference(arrayOne, arrayTwo) {
  let currentPair = [];
	let currentDiff = Infinity;

	for (let i = 0; i < arrayOne.length; i++) {
		for (let j = 0; j < arrayTwo.length; j++) {
			const thisDiff = Math.abs(arrayOne[i] - arrayTwo[j]);
			if (thisDiff < currentDiff) {
				currentDiff = thisDiff;
				currentPair = [arrayOne[i], arrayTwo[j]];
			}
		}
	}
	return currentPair;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
