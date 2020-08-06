/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const runningSumsArray = [];
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            runningSumsArray.push(nums[i]);
        } else {
            runningSumsArray.push(nums[i] + runningSumsArray[i - 1]);
        }
    }
    return runningSumsArray;
};

const nums = [1, 2, 3, 4, 10];

console.log(runningSum(nums));
