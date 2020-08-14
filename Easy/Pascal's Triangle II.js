/**
Pascal's Triangle II

Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

Note that the row index starts from 0.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:
Input: 3
Output: [1,3,3,1]
**/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const triangle = [
        [1],
    ];
    // loop through the number of rows
    for (let i = 1; i <= rowIndex; i++) {
        const thisRow = [];
        // for each number in this row add the sum of the previous row
        for (let j = 0; j <= i; j++) {
            const thisSum = (triangle[i-1][j-1] || 0) + (triangle[i-1][j] || 0);
            thisRow.push(thisSum);
        }
        triangle.push(thisRow);
    }

    return triangle[rowIndex];
};

const rowIndex = 3;
console.log(getRow(rowIndex);
