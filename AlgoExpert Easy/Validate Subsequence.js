/**
Validate Subsequence

Given two non-empty arrays of integers, write a function that determines
whether the second array is a subsequence of the first one.

A subsequence of an array is a set of numbers that aren't necessarily adjacent
in the array but that are in the same order as they appear in the array. For
instance, the numbers

Example 1:
input =
{
	array : [5, 1, 22, 25, 6, -1, 8, 10],
	sequence : [1, 6, -1, 10]
}
output = true;
**/

function isValidSubsequence(array, sequence) {
	let sequenceIndex = 0;
	// loop through the array
	for (let i = 0; i < array.length; i++) {
		if (array[i] === sequence[sequenceIndex]) {
			sequenceIndex++;
		}
		if (sequenceIndex === sequence.length) {
			return true;
		}
	}
	return false;
}

const input =
{
	array : [5, 1, 22, 25, 6, -1, 8, 10],
	sequence : [1, 6, -1, 10]
};

console.log(isValidSubsequence(input.array, input.sequence));
