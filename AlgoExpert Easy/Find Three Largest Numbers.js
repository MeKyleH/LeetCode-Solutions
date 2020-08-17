/**
Find Three Largest Numbers

Write a function that takes in an array of at least three integers and,
without sorting the input array, returns a sorted array of the three largest
integers in the input array.

The function should return duplicate integers if necessary; for example, it
should return [10, 10, 12] for an input array of [10, 5, 9, 10, 12];

Example 1:
Input:
array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
Output:
[18, 141, 541]
**/

function findThreeLargestNumbers(array) {
	const highestThree = [-Infinity, -Infinity, -Infinity];

	// loop through array
	for (let i = 0; i < array.length; i++) {
		// check if the currentNumber is higher than our tracked numbers
		if (array[i] > highestThree[0]) {
			highestThree[0] = array[i];
			highestThree.sort((a, b) => a - b);
		}
	}
	return highestThree;
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
