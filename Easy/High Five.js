/**
High Five

Given a list of scores of different students, return the average score of each student's top five scores in the order of each student's id.

Each entry items[i] has items[i][0] the student's id, and items[i][1] the student's score.  The average score is calculated using integer division.


Example 1:
Input: [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]
Output: [[1,87],[2,88]]
Explanation:
The average of the student with id = 1 is 87.
The average of the student with id = 2 is 88.6. But with integer division their average converts to 88.


Note:
1 <= items.length <= 1000
items[i].length == 2
The IDs of the students is between 1 to 1000
The score of the students is between 1 to 100
For each student, there are at least 5 scores
**/

/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function(items) {
    const studentScores = {};

    // loop through the items
    for (let i = 0; i < items.length; i++) {
        // check if we have found this student id before
        if (!studentScores[items[i][0]]) {
            studentScores[items[i][0]] = [];
        }
       // add this score to the student's scores
        studentScores[items[i][0]].push(items[i][1]);
    }

    const output = [];
    // find the average for each student
    for (let thisStudent in studentScores) {
        let total = 0;
        // sort the scores highest to lowest
        let sortedScores = studentScores[thisStudent].sort((a, b) => b - a);
        for (let i = 0; i < 5; i++) {
            total += sortedScores[i];
        }
        const average = Math.floor(total / 5);
        output.push([thisStudent, average]);
    }

    return output;
};
