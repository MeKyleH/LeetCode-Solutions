/**
N-th Tribonacci Number

The Tribonacci sequence Tn is defined as follows:

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.


Example 1:
Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4

Example 2:
Input: n = 25
Output: 1389537

Constraints:
0 <= n <= 37
The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.
**/

/**
 * @param {number} n
 * @return {number}
 */
// recursive solution
// var tribonacci = function(n) {
//     // handle base cases
//     if (n === 0) {
//         return 0
//     } else if (n === 1) {
//         return 1;
//     } else if (n === 2) {
//         return 1;
//     }

//     // recursively add to the sum
//     let sum = (tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3));
//     return sum;
// };

// iterative solution
var tribonacci = function(n) {
    // handle base cases
    if (n === 0) {
        return 0
    } else if (n === 1) {
        return 1;
    } else if (n === 2) {
        return 1;
    }

    // create pointers
    let nMinus1 = 1; // n = 2
    let nMinus2 = 1; // n = 1
    let nMinus3 = 0; // n = 0

    // loop through nums
    for (let i = 3; i < n; i++) {
        // get the current sum
        const currentSum = nMinus1 + nMinus2 + nMinus3;
        // update the pointers
        nMinus3 = nMinus2;
        nMinus2 = nMinus1;
        nMinus1 = currentSum;
    }
    return nMinus1 + nMinus2 + nMinus3;
};
