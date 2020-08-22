/**
Find All Duplicates in an Array

Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]
Output:
[2,3]
**/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    // create a hash of found nums
    const foundNums = {};
    const duplicates = [];

    // loop through nums
    for (let i = 0; i < nums.length; i++) {
        if (foundNums[nums[i]]) {
            duplicates.push(nums[i]);
        } else {
            foundNums[nums[i]] = true;
        }
    }
    return duplicates;
};
