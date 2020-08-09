/**
Palindrome Number

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:
Input: 121
Output: true

Example 2:
Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Follow up:
**/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
	const xString = '' + x;
	const halfLength = Math.ceil(xString.length / 2);

    // loop through the numbers
    for (let i = 0; i < halfLength; i++) {
    	if (xString[i] === xString[xString.length - 1 - i]) {
	      continue;
      } else {
      return false;
      }
    }
    return true;
};

const x = 141141;

console.log(isPalindrome(x));
