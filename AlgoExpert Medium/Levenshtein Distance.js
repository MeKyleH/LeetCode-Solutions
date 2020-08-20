/**
Levenshtein Distance

Write a function that takes in two strings and returns the minimum number of
edit operations that need to be performed on the first string to obtain the
second string.

There are three edit operations: insertion of a character, deletion of a
character, and substitution of a character for another.

Example:
Input:
str1 = "abc"
str2 = "yabc"
Output:
2 // insert "y", subsitute "c" for "d"
**/

// O(n*m) Time and O(n*m) Space where n is str1 length and m is str2 length
function levenshteinDistance(str1, str2) {
  // create a two dimensional array with 0-n along top and left sides
	const levenshteinMatrix = [];
	for (let i = 0; i <= str1.length; i++) {
		const newRow = [];
		for (let j = 0; j <= str2.length; j++) {
			newRow.push(j);
		}

		newRow[0] = i;
		levenshteinMatrix.push(newRow);
	}

	// loop through two strings
	for (let i = 1; i <= str1.length; i++) {
		for (let j = 1; j <= str2.length; j++) {
			// populate based on diagonal for equall letters
			if (str1[i - 1] === str2[j - 1]) {
				levenshteinMatrix[i][j] = levenshteinMatrix[i - 1][j - 1];
			} else {
				levenshteinMatrix[i][j] = 1 + Math.min(levenshteinMatrix[i - 1][j], levenshteinMatrix[i][j - 1], levenshteinMatrix[i - 1][j - 1]);
			}
		}
	}
	return levenshteinMatrix[str1.length][str2.length];
}

// Do not edit the line below.
exports.levenshteinDistance = levenshteinDistance;
