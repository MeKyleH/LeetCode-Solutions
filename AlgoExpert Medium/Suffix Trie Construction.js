/**
Suffix Trie Construction

Write a SuffixTrie class for a Suffix-Trie-like data structure.
The class should have a root property set to be the root node of
the trie and should support:
	- Creating the trie from a string; this will be done by calling the populateSuffixTrieFrom  method upon class instantiation, which
	should populate the root of the class.
	- Searching for strings in the trie.

Note that every string added to the trie should end with the special endSymbol character: "*".

Example for creation:
Input:
string = "babc"
Output:
{
  "c": {"*": true},
  "b": {
    "c": {"*": true},
    "a": {"b": {"c": {"*": true}}},
  },
  "a": {"b": {"c": {"*": true}}},
}

Example for searching in the suffix trie above
Input:
string = "abc"
Output:
true
**/

// Do not edit the class below except for the
// populateSuffixTrieFrom and contains methods.
// Feel free to add new properties and methods
// to the class.
class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

	// O(n^2) Time and O(n^2) space
  populateSuffixTrieFrom(string) {
		// loop through the string for the start of each suffix
		for (let i = 0; i < string.length; i++) {
			this.subStringHelper(i, string);
		}
  }

	subStringHelper(startingIndex, string) {
		let currentNode = this.root;

		// loop through the remaining substring for the rest of the suffix
		for (let j = startingIndex; j < string.length; j++) {
			const currentLetter = string[j];
			// add missing keys to the hash
			if (!currentNode[currentLetter]) {
				currentNode[currentLetter] = {};
			}
			currentNode = currentNode[currentLetter];
		}
		// Add ending suffix
		currentNode[this.endSymbol] = true ;
	}

	// O(n) Time and O(1) Space
  contains(string) {
		let currentNode = this.root;
  	// loop through the string
		for (let i = 0; i < string.length; i++) {
			const currentLetter = string[i];
			// check if the currentLetter exists
			if (!currentNode[currentLetter]) {
				return false;
			}
			currentNode = currentNode[currentLetter];
		}
		// check for ending symbol
		return currentNode[this.endSymbol] || false;
  }
}

// Do not edit the line below.
exports.SuffixTrie = SuffixTrie;
