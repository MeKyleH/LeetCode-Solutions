/**
Single Cycle Check

You're given an array of integers where each integer represents a jump of its
value in the array. For instance, the integer 2  represents a jump
of two indices forward in the array; the integer -3  represents a
jump of three indices backward in the array.

If a jump spills past the array's bounds, it wraps over to the other side. For
instance, a jump of -1 at index 0 brings us to the last index in
the array. Similarly, a jump of 1 at the last index in the array brings us to
index 0.

Write a function that returns a boolean representing whether the jumps in the
array form a single cycle. A single cycle occurs if, starting at any index in
the array and following the jumps, every element in the array is visited
exactly once before landing back on the starting index.
**/

// O() Time and O() Space
function hasSingleCycle(array) {
	const visitedHash = {};
  // create a hash with each index of the array initialized to 0
	for (let i = 0; i < array.length; i++) {
		visitedHash[i] = false;
	}
	// continue while haven't visited previous index
	let currentIndex = 0;
	let count = 0;
	while (count < array.length) {
		// make the jump
		currentIndex += array[currentIndex];

		// check for looping
		if (currentIndex >= array.length) {
			currentIndex = currentIndex % array.length;
		}
		while (currentIndex < 0) {
			currentIndex += array.length;
		}

		// check that the value hasn't been visited
		if (visitedHash[currentIndex]) {
			return false;
		}
		// record true in the hash for the index if not visited
		visitedHash[currentIndex] = true;
		count++;
	}
	return true;
}

// Do not edit the line below.
exports.hasSingleCycle = hasSingleCycle;
