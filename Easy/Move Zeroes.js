/**
Move Zeroes

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
**/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let leftPointer = 0;
    let rightPointer = 0;

    while (rightPointer < nums.length && leftPointer <= rightPointer) {
        // increment leftPointer while it's pointing at a non-zero value
        while (nums[leftPointer] !== 0 && leftPointer < nums.length) {
            leftPointer++
        }

        if (leftPointer >= rightPointer) {
            rightPointer = leftPointer + 1;
        }

        //increment rightPointer while it's pointing at a zero value
        while (nums[rightPointer] === 0) {
            rightPointer++;
        }

        if (nums[leftPointer] === 0 && nums[rightPointer] && nums[rightPointer] !== 0) {
            swap(nums, leftPointer, rightPointer);
            rightPointer++;
        }
    }
};

function swap (nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
