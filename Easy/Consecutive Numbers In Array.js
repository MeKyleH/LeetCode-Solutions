/**
*	Returns 1 if there are at least 3 consecutive numbers in the array
**/
function hasConsecutiveNumbers(numbersArray) {
	// loop through the numbers and check for consecutive numbers
  for (let i = 0; i < numbersArray.length; i++) {
  	if (numbersArray[i + 1] === numbersArray[i] + 1 && numbersArray[i + 2] === numbersArray[i] + 2) {
    	return 1;
    }
  }
  return 0;
}

const numbersArray = [3,4,7,4,8,0,1,4,3];

console.log(hasConsecutiveNumbers(numbersArray));
