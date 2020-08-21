/**
Generate Parentheses

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
**/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const permutations = [];
  helperGenerator(0, 0, []);
  return permutations;


  function helperGenerator(leftCount, rightCount, thisPermutation) {
    // base case for when we have reached the end - when we've added n pairs of parens
    if (thisPermutation.length === n * 2) {
      permutations.push(thisPermutation.join(''));
      return;
    }

    // add the right and left paren if some remaining, recursively generate remaining, then remove for the next line
    if (leftCount < n) {
      thisPermutation.push('(');
      helperGenerator(leftCount + 1, rightCount, thisPermutation);
      thisPermutation.pop();
    }
    if (rightCount < n && rightCount < leftCount) {
      thisPermutation.push(')');
      helperGenerator(leftCount, rightCount + 1, thisPermutation);
      thisPermutation.pop();
    }
  }
}
