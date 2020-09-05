/**
Search In Sorted Matrix

You're given a two-dimensional array (a matrix) of distinct integers and a
target integer. Each row in the matrix is sorted, and each column is also sorted; the
matrix doesn't necessarily have the same height and width.

Write a function that returns an array of the row and column indices of the
target integer if it's contained in the matrix, otherwise [-1, -1].

Example:
Input:
matrix = [
	[1, 4, 7, 12, 15, 1000],
	[2, 5, 19, 31, 32, 1001],
	[3, 8, 24, 33, 35, 1002],
	[40, 41, 42, 44, 45, 1003],
	[99, 100, 103, 106, 128, 1004],
]
target = 44

Output:
[3, 3]
**/
// O(n^2) Time and O(1) Space)
function searchInSortedMatrix(matrix, target) {
	// loop through the outer array (columns)
	for (let colIndex = 0; colIndex < matrix.length; colIndex++) {
		// loop through the row
		for (let rowIndex = 0; rowIndex < matrix[colIndex].length; rowIndex++) {
			// check for a match
			if (matrix[colIndex][rowIndex] === target) {
				return [colIndex, rowIndex];
			}
			// check if we've passed the target in this row
			if (matrix[colIndex][rowIndex] > target) {
				break;
			}
		}
	}
	// return not found values
	return [-1, -1];
}

// O(n+m) Time and O(1) Space
function searchInSortedMatrix2(matrix, target) {
  let rowPointer = 0;
	let colPointer = matrix[0].length - 1;

	// repeat until the pointers converge or exit the matrix
	while (rowPointer < matrix.length && colPointer >= 0) {
		// check for a match
		if (matrix[rowPointer][colPointer] === target) {
			return [rowPointer, colPointer];
		} else if (matrix[rowPointer][colPointer] < target) {
			rowPointer++;
		} else {
			colPointer--;
		}
	}
	// return not found values
	return [-1, -1];
}

// Do not edit the line below.
exports.searchInSortedMatrix = searchInSortedMatrix;
