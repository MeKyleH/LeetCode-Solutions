/**
Permutations

Write a function that takes in an array of unique integers and returns an
array of all permutations of those integers in no particular order.

If the input array is empty, the function should return an empty array.

Example 1:
Input:
array = [1, 2, 3]
Output:
[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
**/

// Base function
// O(n*n!) Time and O(n*n!) Space
function getPermutations(array) {
	// sets the base case for calling the recursive helper function
	const permutations = [];
	findSubPermutations(0, array, permutations);
	return permutations;
}

// recursive function that swaps in place the numbers after i to find all permutations
function findSubPermutations(i, array, permutations) {
	// check if i is the last element in the array and update permutations
	if (i === array.length - 1) {
		permutations.push(array.slice());
	} else {
		// loop through the remaining length of array
		for (let j = i; j < array.length; j++) {
			// swap the next index
			swap(array, i, j);
			// call this method for the next index
			findSubPermutations(i + 1, array, permutations);
			// swap the indices back so it can continue/repeat on the next index
			swap(array, i, j);
		}
	}
}

// returns a swapped array where the two indices are swapped
function swap(array, i, j) {
	const tempValue = array[i];
	array[i] = array[j];
	array[j] = tempValue
}

// Do not edit the line below.
exports.getPermutations = getPermutations;
