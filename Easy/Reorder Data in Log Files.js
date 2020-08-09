/**
Reorder Data in Log Files

You have an array of logs.  Each log is a space delimited string of words.

For each log, the first word in each log is an alphanumeric identifier.  Then, either:

Each word after the identifier will consist only of lowercase letters, or;
Each word after the identifier will consist only of digits.
We will call these two varieties of logs letter-logs and digit-logs.  It is guaranteed that each log has at least one word after its identifier.

Reorder the logs so that all of the letter-logs come before any digit-log.  The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.  The digit-logs should be put in their original order.

Return the final order of the logs.


Example 1:
Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]

Example 2:
Input: logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
Output: ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]

Example 3:
Input: logs = ["g1 act car","a2 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
Output: ["a2 act car","g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]

Constraints:

0 <= logs.length <= 100
3 <= logs[i].length <= 100
logs[i] is guaranteed to have an identifier, and a word after the identifier.
**/


/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
	const letterLogs = [];
  const digitLogs = [];

  // removes the identifier from a log
  removeIdentifier = (thisLog) => thisLog.slice(thisLog.indexOf(' ') + 1);
  // determines if a sanitized log is a number log
  checkIsNumber = (thisLogLessIdentifier) => thisLogLessIdentifier[0] >= '0' && thisLogLessIdentifier[0] <= '9';

  // loop through logs and separate them into their correct array
  for (let i = 0; i < logs.length; i++) {
  	checkIsNumber(removeIdentifier(logs[i])) ? digitLogs.push(logs[i]) : letterLogs.push(logs[i]);
  }

	// sort the letterLogs
	letterLogs.sort((a, b) => {
  	const aLessIdentifier = removeIdentifier(a);
    const bLessIdentifier = removeIdentifier(b);

    const areSanitizedLogsEqual = aLessIdentifier.localeCompare(bLessIdentifier);
    if (areSanitizedLogsEqual !== 0) {
    	return areSanitizedLogsEqual;
    }
    return a.localeCompare(b);
  });

	// return combined arrays
	return letterLogs.concat(digitLogs);
};

const logs = ["g1 act car","a2 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"];

console.log(reorderLogFiles(logs));
