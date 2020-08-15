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

// Time = O(N * M) Space = O(1)
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

// Time = O(Nlog(n) + Mlog(m)) Space = O(1)
function smallestDifference2(arrayOne, arrayTwo) {
	const sorted1 = arrayOne.sort(function(a, b) { return a - b });
	const sorted2 = arrayTwo.sort(function(a, b) { return a - b });

	let currentPair = [];
	let currentDiff = Infinity;
	let index1 = 0;
	let index2 = 0;

	while (index1 < arrayOne.length && index2 < arrayTwo.length) {
		const thisDiff = Math.abs(sorted1[index1] - sorted2[index2]);
		if (thisDiff < currentDiff) {
			currentDiff = thisDiff;
			currentPair = [sorted1[index1], sorted2[index2]];
		}
		if (thisDiff === 0) {
			break;
		}
		if (sorted1[index1] < sorted2[index2]) {
			index1++;
		} else {
			index2++;
		}
	}
	return currentPair;
}

// Do not edit the line below.
exports.smallestDifference2 = smallestDifference;
