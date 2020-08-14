/**
Pascal's Triangle

Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:
Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
**/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0) {
        return [];
    }
    const output = [
        [1],
    ];
    // loop through the number of rows
    for (let i = 1; i < numRows; i++) {
        const thisRow = [];
        // for each number in this row add the sum of the previous row
        for (let j = 0; j <= i; j++) {
            const thisSum = (output[i-1][j-1] || 0) + (output[i-1][j] || 0);
            thisRow.push(thisSum);
        }
        output.push(thisRow);
    }
    return output;
};

const numRows = 5;
console.log(generate(5));
