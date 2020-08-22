/**
3Sum

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:
The solution set must not contain duplicate triplets.

Example:
Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
**/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const solutions = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let leftIndex = i + 1;
    let rightIndex = nums.length - 1;

    while (leftIndex < rightIndex) {
      const thisSum = nums[i] + nums[leftIndex] + nums[rightIndex];
      if (thisSum < 0) {
        // make it bigger
        leftIndex++;
      } else if (thisSum > 0) {
        // make it smaller
        rightIndex--;
      } else {
        // found a solution
        solutions.push([nums[i], nums[leftIndex], nums[rightIndex]]);

        // safeguard against duplicates with leftValue
        const leftValue = nums[leftIndex];
        while (leftValue === nums[leftIndex] && leftIndex < rightIndex) {
          leftIndex++;
        }

        // safeguard against duplicates with rightValue
        const rightValue = nums[rightIndex];
        while (rightValue === nums[rightIndex] && rightIndex > leftIndex) {
          rightIndex--;
        }
      }
    }

    // safeguard against duplicates with iValue
    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
	    i++;
    }
  }
  return solutions;
}
