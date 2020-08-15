/**
Valid Parentheses

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.


Example 1:
Input: "()"
Output: true

Example 2:
Input: "()[]{}"
Output: true

Example 3:
Input: "(]"
Output: false

Example 4:
Input: "([)]"
Output: false

Example 5:
Input: "{[]}"
Output: true
**/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let currentOpen = '';
    // loop through the string
    for (let i = 0; i < s.length; i++) {
        // track the openning and closing symbols
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            currentOpen += s[i];
        } else {
            // check that the next closing matches the last opened
            const lastOpened = currentOpen[currentOpen.length - 1];
            if ((s[i]  === ')' && lastOpened === '(') ||
                (s[i]  === '}' && lastOpened === '{') ||
                (s[i]  === ']' && lastOpened === '[')
               ) {
               currentOpen = currentOpen.substring(0, currentOpen.length - 1);
            } else {
                return false;
            }
        }
    }
    return currentOpen.length === 0;
};

const s = '()';
console.log(isValid(s));
