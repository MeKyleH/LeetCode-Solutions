/**
Product Sum

Write a function that takes in a "special" array and returns its product sum.

A "special" array is a non-empty array that contains either integers or other
"special" arrays. The product sum of a "special" array is the sum of its
elements, where "special" arrays inside it are summed themselves and then
multiplied by their level of depth.

The depth of a "special" array is how far nested it is. For instance, the
depth of [] is 1; the depth of the inner array in [[]] is 2; the depth of the innermost array in [[[]]] is 3.

Therefore, the product sum of [x, y] is x + y; the product sum of [x, [y, z]] is x + 2 * (y + z); the product sum of [x, [y, [z]]] is x + 2 * (y + 3z).

Example 1:
Input:
array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
Output:
12 // calculated as: 5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 + 8) + 4)

// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
**/

// O(n * m) Time and O(d) Space - wehre d is the greatest depth of a special array
function productSum(array) {
  return helper(1, array);
}

function helper(depth, specialArray) {
	let sum = 0;
	// loop through the special array
	for (let i = 0; i < specialArray.length; i++) {
		// check if int or array
		if (Array.isArray(specialArray[i])) {
			sum += helper(depth + 1, specialArray[i]) * depth;
		} else {
			sum += specialArray[i] * depth;
		}
	}
	return sum;
}

// Do not edit the line below.
exports.productSum = productSum;


function productSum2(array, depth = 1) {
	let sum = 0;
	// loop through the special array
	for (let i = 0; i < array.length; i++) {
		// check if int or array
		if (Array.isArray(array[i])) {
			sum += productSum2(array[i], depth + 1);
		} else {
			sum += array[i];
		}
	}
	return sum * depth;
}
