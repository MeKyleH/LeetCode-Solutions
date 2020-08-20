/**
Number of Ways To Make Change

Given an array of distinct positive integers representing coin denominations and a
single non-negative integer n representing a target amount of
money, write a function that returns the number of ways to make change for
that target amount using the given coin denominations.

Note that an unlimited amount of coins is at your disposal.

Example:
Input:
n = 6
denoms = [1, 5]
Output:
2
**/

// O(n*d) Time and O(n) Space - where n is n and d is the number of denoms
function numberOfWaysToMakeChange(n, denoms) {
	let numSolutions = [];
	for (let i = 0; i <= n; i++) {
		numSolutions.push(0);
	}
	numSolutions[0] = 1;

	// loop through each denomination
	for (let i = 0; i < denoms.length; i++) {
		const thisDenom = denoms[i];
		// loop through every amount from 0 - n
		for (let amount = 1; amount <= n; amount++) {
			// check if a coin could be added
			if (thisDenom <= amount) {
				numSolutions[amount] += numSolutions[amount - thisDenom];
			}
		}
	}
	return numSolutions[n];
}

// Do not edit the line below.
exports.numberOfWaysToMakeChange = numberOfWaysToMakeChange;
