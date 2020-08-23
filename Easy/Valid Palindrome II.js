/**
Valid Palindrome II

Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True
Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.
Note:
The string will only contain lowercase characters a-z. The maximum length of the string is 50000.
**/

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s, isCalled = false) {
  let leftPointer = 0;
  let rightPointer = s.length - 1;

  while (leftPointer < rightPointer) {
    if (s[leftPointer] !== s[rightPointer]) {
      if (isCalled) {
        return false;
      }
      const leftString = s.slice(0, leftPointer) + s.slice(leftPointer + 1, s.length);
      const rightString = s.slice(0, rightPointer) + s.slice(rightPointer + 1, s.length);

      const isLeftPalindrome = validPalindrome(leftString, true);
      const isRightPalindrome = validPalindrome(rightString, true);

      return isLeftPalindrome || isRightPalindrome;
    } else {
      leftPointer++;
      rightPointer--;
    }
  }

  return true;
};
