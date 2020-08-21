/**
Move Element To End

You're given an array of integers and an integer. Write a function that moves
all instances of that integer in the array to the end of the array and returns
the array.

The function should perform this in place (i.e., it should mutate the input
array) and doesn't need to maintain the order of the other integers.

Example 1:
Input:
array = [2, 1, 2, 2, 2, 3, 4, 2];
toMove = 2;

Output:
[1, 3, 4, 2, 2, 2, 2, 2]
**/

function moveElementToEnd(array, toMove) {
	let matchesFound = 0;
	// loop through the array
	for (let i = 0; i < array.length; i++) {
		// end if we've gone far enough that we've checked all matches
		if (i === array.length - 1 - matchesFound) {
			break;
		}
		// check if this number needs to move
		if (array[i] === toMove) {
			// remove this number from the array
			// add this number to the end of the array
			array.splice(i, 1);
			array.push(toMove);
			matchesFound++;
			i--;
		}
	}
	return array;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
