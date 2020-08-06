/**
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
**/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	// loop through nums for the first number
  for (let i = 0; i < nums.length; i++) {
  	// loop through the remaining numbers in nums for the second number
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
	      return [i, j];
      }
    }
  }
};

const nums = [0,4,3,0];
const target = 0;

console.log(twoSum(nums, target));
