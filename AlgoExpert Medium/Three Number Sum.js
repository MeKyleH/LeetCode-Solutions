/**
Three Number Sum

Write a function that takes in a non-empty array of distinct integers and an
integer representing a target sum. The function should find all triplets in
the array that sum up to the target sum and return a two-dimensional array of
all these triplets. The numbers in each triplet should be ordered in ascending
order, and the triplets themselves should be ordered in ascending order with
respect to the numbers they hold.

If no three numbers sum up to the target sum, the function should return an
empty array.

Example 1:
array = [12, 3, 1, 2, -6, 5, -8, 6];
targetSum = 0

Output:
[[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]];
**/

function threeNumberSum(array, targetSum) {
  const sortedArray = array.sort(function(a, b){return a-b});
	const solutions = [];

	for (let i = 0; i < sortedArray.length; i++) {
		const firstNum = sortedArray[i];
		for (let j = i + 1; j < sortedArray.length; j++) {
			const secondNum = sortedArray[j];
			const neededNum = targetSum - firstNum - secondNum;
			if (sortedArray.indexOf(neededNum, j) > j) {
				solutions.push([firstNum, secondNum, neededNum]);
			}
		}
	}

	return solutions;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
