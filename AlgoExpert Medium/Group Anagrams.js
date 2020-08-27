/**
Group Anagrams

Write a function that takes in an array of strings and groups anagrams together.

Anagrams are strings made up of exactly the same letters, where order doesn't
matter. For example, "cinema" and "iceman" are anagrams; similarly, "foo" and "ofo" are anagrams.

Your function should return a list of anagram groups in no particular order.

Example:
Input:
words  = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]
Output:
[["yo", "oy"], ["flop", "olfp"], ["act", "tac", "cat"], ["foo"]]
**/

// O(n^2) Time and O(n) Space
function groupAnagrams(words) {
	const output = {};

	// loop through the words
	for (let i = 0; i < words.length; i++) {
		// sort the current string
		const sortedString1 = words[i].split('').sort().join('');
		const localAnagram = [];
		localAnagram.push(words[i]);

		// loop through the remaining words
		for (let j = i + 1; j < words.length; j++) {
			// sort the new current string
		const sortedString2 = words[j].split('').sort().join('');

			// compare the strings
			if (sortedString1 === sortedString2) {
				localAnagram.push(words[j]);
			}
		}
		// push the final result
    if (!output[sortedString1]) {
			output[sortedString1] = localAnagram;
    }

	}
	return Object.values(output);
}

// Do not edit the line below.
exports.groupAnagrams = groupAnagrams;
