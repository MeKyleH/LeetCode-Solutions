/**
Nth Fibonacci

The Fibonacci sequence is defined as follows: the first number of the sequence
is 0, the second number is 1, and the nth number is the sum of the (n - 1)th
and (n - 2)th numbers. Write a function that takes in an integer


Important note: the Fibonacci sequence is often defined with its first two
numbers as F0 = 0 and F1 = 1. For the purpose of
this question, the first Fibonacci number is F0; therefore, getNthFib(1) is equal to F0, getNthFib(2) is equal to F1, etc..

Example 1:
Input:
n = 2;
Output:
1 // 0, 1

Example 2:
Input:
n = 6
Output:
5 // 0, 1, 1, 2, 3, 5
**/

function getNthFib(n) {
	const fibsArray = [0, 1];

	if (n === 0) {
		return 1;
	}
	for (let i = 2; i < n; i++) {
		fibsArray.push(fibsArray[i - 1] + fibsArray[i - 2]);
	}
	return fibsArray[n - 1];
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
