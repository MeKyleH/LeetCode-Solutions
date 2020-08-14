/**
Longest Palindrome

Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:
Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
**/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const stringCountsHash = {};
  let forwardString = '';
  let oddCharacter = '';
  let reverseString = '';
  let hasSetOddCharacter = false;

  // loop through s
  for (let i = 0; i < s.length; i++) {
    // get a count of each letter
    if (!stringCountsHash[s[i]]) {
      stringCountsHash[s[i]] = 1
    } else {
      stringCountsHash[s[i]]++;
    }
  }

  // add each letter that has an even count to a forward and reverse string
  for (let thisKey in stringCountsHash) {
    if (stringCountsHash[thisKey] / 2 > 0) {
      const numberOfEvens = Math.floor(stringCountsHash[thisKey] / 2);
      for (let i = 0; i < numberOfEvens; i++) {
      	stringCountsHash[thisKey] -= 2;
        forwardString += thisKey;
        reverseString = thisKey + reverseString;
      }
    }
  }

  // add a single odd count letter
  for (let thisKey in stringCountsHash) {
    if (stringCountsHash[thisKey] % 2 !== 0 && !hasSetOddCharacter) {
      hasSetOddCharacter = true;
      oddCharacter = thisKey;
      break;
    }
  }
  const finalString = forwardString + oddCharacter + reverseString;


  return finalString.length;
};

const s = 'ccc';
console.log(longestPalindrome(s));
