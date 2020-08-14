/**
Two Number Sum

Write a function that takes in a non-empty array of distinct integers and aninteger representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.
**/

// O(n^2) Time and O(1) space
function twoNumberSum(array, targetSum) {
	// loop through sortedArray to check for targetSum
	for (let i = 0; i < array.length; i++) {
		// loop through remaining numbers for a match
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] + array[j] === targetSum) {
				return [array[i], array[j]];
			}
		}
	}
	return [];
}


// O(n) Time and O(n) space
function twoNumberSum2(array, targetSum) {
  const usedNumbers = {};
	// loop through array and check if the number exists in our usedNumbers
	for (let i = 0; i < array.length; i++) {
		const targetNumber = targetSum - array[i];
		if (usedNumbers[targetNumber]) {
			return [array[i], targetNumber];
		}
		usedNumbers[array[i]] = true;
	}
	return [];
}


const array = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;

console.log(twoNumberSum(array, targetSum));
console.log(twoNumberSum2(array, targetSum));
