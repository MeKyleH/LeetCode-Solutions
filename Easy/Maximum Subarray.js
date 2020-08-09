/**
Maximum Subarray

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:
Input: [1]
Output: 1

Example 3:
Input: [-1]
Output: -1
**/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currentMax = 0;

    // loop through all of nums
    for (let i = 0; i < nums.length; i++) {
        // check if the maximum is including the next number
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        maxSum = Math.max(currentMax, maxSum);
    }

    return maxSum;
};


const nums = [0];

console.log(maxSubArray(nums));
