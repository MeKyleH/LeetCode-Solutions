/**
Longest Peak

Write a function that takes in an array of integers and returns the length of
the longest peak in the array.


A peak is defined as adjacent integers in the array that are strictly
increasing until they reach a tip (the highest value in the peak), at which
point they become

For example, the integers 1, 4, 10, 2 form a peak, but the integers 4, 0, 10 dont' and neither do the integers 1, 2, 3, 0. Similarly, the integers 1, 2, 3 don't form a peak because there aren't any strictly decreasing integers after the 3.
**/

// O(n) Time and O(1) Space
function longestPeak(array) {
  let longestStreak = 0;

  // loop through the array but skip the ends
  for (let i = 1; i < array.length - 1; i++) {
    if (!getIsPeak(array, i)) {
      continue;
    }

    let leftIndex = getLeftLength(array, i);
    let rightIndex = getRightLength(array, i)
		console.log('left: ' + leftIndex + '. i: ' + i + ". Right: " + rightIndex);
    // check this length vs previous longest
    const thisStreakLength = rightIndex - leftIndex + 1;
    longestStreak = thisStreakLength > longestStreak ? thisStreakLength : longestStreak;
  }
  return longestStreak
}

// find the furthest left it continues to decrease
function getLeftLength(array, peakIndex) {
  let leftIndex = peakIndex;
  while (leftIndex > 0 && array[leftIndex] > array[leftIndex - 1]) {
    leftIndex--;
  }
  return leftIndex;
}


// find the furthest right it continues to decrease
function getRightLength(array, peakIndex) {
  let rightIndex = peakIndex;
  while (rightIndex < array.length && array[rightIndex] > array[rightIndex + 1]) {
    rightIndex++;
  }

  return rightIndex;
}

function getIsPeak(array, peakIndex) {
  return array[peakIndex - 1] < array[peakIndex] && array[peakIndex] > array[peakIndex + 1];
}

//const array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]; // 6
//const array = [1, 3, 2]; // 3
//const array = [5, 4, 3, 2, 1, 2, 10, 12, -3, 5, 6, 7, 10];
const array = [1, 2, 3, 4, 5, 1]; // 6
//longestPeak(array);
console.log(longestPeak(array));
