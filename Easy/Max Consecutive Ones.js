/**
Max Consecutive Ones

Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000
**/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let currentMax = 0;
    let num1s = 0;
    // loop through nums
    for (let i = 0; i < nums.length; i++) {
        // if found 1 then see how many follow
        if (nums[i] === 1) {
            num1s = 1;
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] === 1) {
                    num1s++;
                }
                else {
                    break;
                }
            }
        }
        // if more than currentMax increase currentMax
        if (num1s > currentMax) {
            currentMax = num1s;
        }
    }
    return currentMax;
};

const nums = [1,1,0,1,1,1];
console.log(findMaxConsecutiveOnes(nums));
