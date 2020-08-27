/**
Longest Palindromic Substring

Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example 2:
Input: "cbbd"
Output: "bb"
**/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length === 0) {
        return '';
    }
    let globalLongest = s[0] + '';

    // loop through the string
    for (let i = 0; i < s.length; i++) {
        // find the length of a palindrome at this position
        const leftPalim = palimHelper(s, i - 1, i);
        const middlePalim = palimHelper(s, i - 1, i + 1);

        // update the longest palindrome value
        const currentLongest = leftPalim.length > middlePalim.length ? leftPalim : middlePalim;
        globalLongest = currentLongest.length > globalLongest.length ? currentLongest : globalLongest;
    }

    return globalLongest;
};

function palimHelper(s, leftIndex, rightIndex) {
    // repeat as long as we're within the bounds of the string
    while (leftIndex >= 0 && rightIndex < s.length) {
        // stop if the strings are not equal (not a palindrome)
        if (s[leftIndex] !== s[rightIndex]) {
            break;
        }
        leftIndex--;
        rightIndex++;
    }
    return s.substring(leftIndex + 1, rightIndex);
}
