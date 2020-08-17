/**
Casear Cipher Encryptor

Given a non-empty string of lowercase letters and a non-negative integer
representing a key, write a function that returns a new string obtained by
shifting every letter in the input string by k positions in the alphabet,
where k is the key.

Note that letters should "wrap" around the alphabet; in other words, the
letter

Example 1:
Input:
string = 'xyz'
key = 2

Output:
'zab'
**/

// O(n) Time and O(1) Space
function caesarCipherEncryptor(string, key) {
  let shiftedString = '';
  // loop through the string
  for (let i = 0; i < string.length; i++) {
    // save the shifted letter
    shiftedString += shiftCharacter(string, i, key);
  }
  // return the output
  return shiftedString;
}

// adds the key and shifts the character if passing 'z'
function shiftCharacter(string, i, key) {
  const zCharacterCode = 122;
  const currentCharacterCode = string.charCodeAt(i);
  let newCharacterCode = currentCharacterCode + key;
  while (newCharacterCode > zCharacterCode) {
    newCharacterCode -= 26;
  }
  return String.fromCharCode(newCharacterCode);
}

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;
