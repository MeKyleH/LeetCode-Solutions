/********************************
* We want make a package of goal kilos of skittles. We have
* inventory of small bags (1 kilos each) and big bags (5 kilos each).
* Return the number of small bags to use, assuming we always
* use big bags before small bags. Return -1 if it can't be done.
*
* See the asserts below for examples of input
* and expected output.
*
* If you have node installed, all you need to do to test
* your code is run: `node skittles.js`. If you see errors,
* it is because the tests below did not pass. Once the
* tests do pass, you will see a log of `Success!`
*
* YOUR CODE BELOW HERE
********************************/

function createPackage(small, big, goal) {
	// find number of big bags used
  const maxNumBigBagsNeeded = Math.floor(goal / 5);
  const numBigBagsUsed = big >= maxNumBigBagsNeeded ? maxNumBigBagsNeeded : big;

  // find number of small bags used
  const numKilosRemaining = goal - (numBigBagsUsed * 5);
	return small >= numKilosRemaining ? numKilosRemaining : -1;
}

const small = 9;
const big = 3;
const goal = 18;

console.log(createPackage(small, big, goal));
