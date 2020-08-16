/**
Palindrome Check

Write a function that takes in a non-empty string and that returns a boolean
representing whether the string is a palindrome.

A palindrome is defined as a string that's written the same forward and
backward. Note that single-character strings are palindromes.

Example 1:
Input:
string = "abcdcba"
Output:
true // is't written the same forward and backward
**/

// O(n) Time and O(1) Space
function isPalindrome(string) {
	let leftIndex = 0;
	let rightIndex = string.length - 1;

  // loop through the string
	while (leftIndex < rightIndex) {
		// check that our left pointer character is the right pointer character
		if (string[leftIndex] !== string[rightIndex]) {
			return false;
		}
		// return when the left pointer is the right pointer (middle)
		leftIndex++;
		rightIndex--;
	}
	return true;
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;
