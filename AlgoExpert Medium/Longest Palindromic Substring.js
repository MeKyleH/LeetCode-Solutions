/**
Longest Palindromic Substring

Write a function that, given a string, returns its longest palindromic
substring.

A palindrome is defined as a string that's written the same forward and
backward. Note that single-character strings are palindromes.

You can assume that there will only be one longest palindromic substring.

Example:
Input:
string = "abaxyzzyxf"
Output:
"xyzzyx"
**/

// O(n^2) Time and O(1) Space
function longestPalindromicSubstring(string) {
	let longestPalindrome = [0, 1];
	// loop through the string
	for (let i = 0; i < string.length; i++) {
		// check if this could be the middle of a palindrome
		const palimOdd = palindromeHelper(string, i - 1, i + 1);
		const palimEven = palindromeHelper(string, i - 1, i);

		// compare lengths of current vs previous palindrome
		let roundLongest = (palimOdd[1] - palimOdd[0]) > (palimEven[1] - palimEven[0]) ? palimOdd : palimEven;
		longestPalindrome = (roundLongest[1] - roundLongest[0]) > (longestPalindrome[1] - longestPalindrome[0]) ? roundLongest : longestPalindrome;
	}
	return string.slice(longestPalindrome[0], longestPalindrome[1]);
}

function palindromeHelper(string, leftIndex, rightIndex) {
	// repeat as long as still palindrome
	while (leftIndex >= 0 && rightIndex < string.length) {
		if (string[leftIndex] !== string[rightIndex]) {
			break;
		}
			leftIndex--;
			rightIndex++;
	}

	// have to correct for going beyond the left index - right index is corrected in the beginning setting of longestPalindrome
	return [leftIndex + 1, rightIndex];
}

// Do not edit the line below.
exports.longestPalindromicSubstring = longestPalindromicSubstring;
