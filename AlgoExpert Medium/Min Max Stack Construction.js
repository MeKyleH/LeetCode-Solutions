/**
Min Max Stack Construction

Write a MinMaxStack class for a Min Max Stack. The class should
support:
	- Pushing and popping values on and off the stack.
	- Peeking at the value at the top of the stack.
	- Getting both the minimum and the maximum values in the stack at any given
	point in time.

All class methods, when considered independently, should run in constant time
and with constant space.
**/

// Feel free to add new properties and methods to the class.
class MinMaxStack {
	constructor() {
		this.minMaxStack = [];
		this.stack = [];
	}
  peek() {
    return this.stack[this.stack.length - 1];
  }

  pop() {
    this.minMaxStack.pop();
		return this.stack.pop();
  }

  push(number) {
		// create a newMinMax object with the number
		const newMinMax = { min: number, max: number };
		// check where there are already items in the minMax stack
		if (this.minMaxStack.length) {
			// get the last minMax value and then compare with the new number
			const lastMinMax = this.minMaxStack[this.minMaxStack.length - 1];
			newMinMax.min = Math.min(lastMinMax.min, number);
			newMinMax.max = Math.max(lastMinMax.max, number);
		}
    this.minMaxStack.push(newMinMax);
    this.stack.push(number);
  }

  getMin() {
    return this.minMaxStack[this.minMaxStack.length - 1].min;
  }

  getMax() {
    return this.minMaxStack[this.minMaxStack.length - 1].max;
  }
}

// Do not edit the line below.
exports.MinMaxStack = MinMaxStack;
