/**
Add Strings

Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
**/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
  let length1 = num1.length;
  let length2 = num2.length;
  let maxLength = length1 > length2 ? length1 : length2;
  maxLength++;
  let carry = 0;
  let total = '';
  for (let i = 0; i < maxLength; i++) {
    if (i === (maxLength - 1) && carry === 0) {
      continue;
    }
    let a = (num1.charCodeAt(length1 - i - 1) - 48) || 0;
    let b = (num2.charCodeAt(length2 - i - 1) - 48) || 0;
    let t = a + b + carry;
    carry = Math.floor(t / 10);
    total = (t % 10) + total;
  }
  return total;
}

const number1 = "0"; const number2 = '0';
//const number1 = "1"; const number2 = '1';
//const number1 = "53"; const number2 = '47';
//const number1 = "933852702227987"; const number2 = '85731737104263';

console.log(addStrings(number1, number2));
