/**
Reverse Integer

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:
Input: 123
Output: 321

Example 2:
Input: -123
Output: -321

Example 3:
Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
**/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const min = -2147483648;
    const max = 2147483647;

    const isNegative = x < 0;

    // convert the number to a string
    const stringX = '' + x;
    // convert string to array in reverse
    const xArray = [];
    for (let i = stringX.length - 1; i >= 0; i--) {
        xArray.push(stringX[i]);
    }

    // convert array to string
    const revString = xArray.join('');
    let revX = parseInt(revString, 10);
    if (isNegative) {
        revX *= -1;
    }
    // return the new number if not overflow
    if (revX > max || revX < min) {
        return 0;
    }

    return revX;
};
