/**
Decode Ways

A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given a non-empty string containing only digits, determine the total number of ways to decode it.

Example 1:
Input: "12"
Output: 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).

Example 2:
Input: "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
**/

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if (s[0] === "0") {
    return 0;
  }
  const letters = [];

  // fill dp solutions array with zeros
  var dpArray = new Array(s.length + 1).fill(0);

  // update base values to 1
  dpArray[0] = 1;
  dpArray[1] = 1;

  // loop through the string
  for (let i = 2; i <= s.length; i++) {
    // first digit is the last letter
    let singleDigit = s.slice(i - 1, i)

    // if it's greater than 1 (not a 0) then you can the previous dpColumn
    if (singleDigit >= 1) {
      dpArray[i] += dpArray[i - 1]
    }

    // double digit is if you look at this and the last "letter"
    let doubleDigit = s.slice(i - 2, i)
    // add the answer from two back if it's between 10 and 26
    if (doubleDigit >= 10 && doubleDigit <= 26) {
      dpArray[i] += dpArray[i - 2]
    }
  }
  // return the final answer
  return dpArray[s.length];
};
