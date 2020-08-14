/**
Remove Vowels from a String

Given a string S, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.

Example 1:
Input: "leetcodeisacommunityforcoders"
Output: "ltcdscmmntyfrcdrs"

Example 2:
Input: "aeiou"
Output: ""

Note:
S consists of lowercase English letters only.
1 <= S.length <= 1000
**/

/**
 * @param {string} S
 * @return {string}
 */
var removeVowels = function(S) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let newString = '';

    // loop through the string
    for (let i = 0; i < S.length; i++) {
        //check if the letter is a vowel and if no add it to the newString
        if (!vowels.includes(S[i])) {
            newString += S[i];
        }
    }

    return newString;
};
