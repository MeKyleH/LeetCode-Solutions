/**
Subarray Sum Equals K

Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:

Input:nums = [1,1,1], k = 2
Output: 2


Constraints:

The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
**/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let solutions = 0;
    // loop through the nums
    for (let i = 0; i < nums.length; i++) {
        const thisNumber = nums[i];
        // add a solution if this is one by itself
        if (thisNumber === k) {
            solutions++;
        }
        let sum = thisNumber;
        let rightPointer = i + 1;
        while (rightPointer < nums.length) {
            sum += nums[rightPointer];
            // log the solution
            if (sum === k) {
                solutions++;
            }
            rightPointer++;
        }
    }
    return solutions;
};
