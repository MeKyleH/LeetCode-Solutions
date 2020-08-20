/**
Min Number of Coins For Change

Given an array of positive integers representing coin denominations and a
single non-negative integer n representing a target amount of
money, write a function that returns the smallest number of coins needed to
make change for (to sum up to) that target amount using the given coin
denominations.

Note that you have access to an unlimited amount of coins. In other words, if
the denominations are [1, 5, 10], you have access to an unlimited
amount of 1s, 5s, and 10s.

If it's impossible to make change for the target amount, return -1.
**/

// O(n*d) Time and O(n) Space
function minNumberOfCoinsForChange(n, denoms) {
	// sort the denoms
	denoms.sort(function(a, b) { return a - b });

	// initialiize our solutions array
	let minNumUsed = [];
	for (let i = 0; i <= n; i++) {
		minNumUsed.push(Infinity);
	}
	minNumUsed[0] = 0;

	// loop through the denoms
	for (let i = 0; i < denoms.length; i++) {
		const thisDenom = denoms[i];

		// loop through the solutions array
		for (let amount = 0; amount < minNumUsed.length; amount++) {
			// find how many coins we need for this denom
			if (thisDenom <= amount) {
				minNumUsed[amount] = Math.min(minNumUsed[amount], 1 + minNumUsed[amount - thisDenom]);
			}
		}
	}

	return minNumUsed[n] !== Infinity ? minNumUsed[n] : -1;
}

// Do not edit the line below.
exports.minNumberOfCoinsForChange = minNumberOfCoinsForChange;
