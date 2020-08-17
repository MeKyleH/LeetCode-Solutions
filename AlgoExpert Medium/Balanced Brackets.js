/**
Balanced Brackets

Write a function that takes in a string made up of brackets ( (, [, {, }, ], snd ) ) ) and other optional characters. The function should return a
boolean representing whether the string is balanced with regards to brackets.

A string is said to be balanced if it has as many opening brackets of a
certain type as it has closing brackets of that type and if no bracket is
unmatched. Note that an opening bracket can't match a corresponding closing
bracket that comes before it, and similarly, a closing bracket can't match a
corresponding opening bracket that comes after it. Also, brackets can't
overlap each other as in [(]).

Example 1:
Input:
string = "([])(){}(())()()"
Output:
true // it's balanced
**/

// O(n) Time and 0(n) Space
function balancedBrackets(string) {
	const safeCharacters = ['(', ')', '[', ']', '{', '}'];
	let currentOpen = '';

  // loop through the string
	for (let i = 0; i < string.length; i++) {
		const currentChar = string[i];
		const lastOpen = currentOpen[currentOpen.length - 1];

		if (!safeCharacters.includes(currentChar)) {
			continue;
		}
		// check for a mismatched closing
		if (
				(currentChar === ')' && lastOpen !== '(') ||
				(currentChar === ']' && lastOpen !== '[') ||
				(currentChar === '}' && lastOpen !== '{')
			 ) {
				return false;
			}

		// remove if closing, add if opening
		if (currentChar === '(' || currentChar === '[' || currentChar === '{') {
			currentOpen += currentChar;
		} else {
			currentOpen = currentOpen.substring(0, currentOpen.length - 1);
		}
	}
	return currentOpen.length === 0;
}

// Do not edit the line below.
exports.balancedBrackets = balancedBrackets;
