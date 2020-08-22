/**
Palindrome Linked List

Given a singly linked list, determine if it is a palindrome.

Example 1:
Input: 1->2
Output: false

Example 2:
Input: 1->2->2->1
Output: true
**/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let node = head;
    const valuesArray = [];
    // traverse the linked list
    while (node !== null) {
        // save the current value
        valuesArray.push(node.val);
        node = node.next;
    }
    // check that the values are the same forward and backward
    let leftPointer = 0;
    let rightPointer = valuesArray.length - 1;

    while (leftPointer < rightPointer) {
        if (valuesArray[leftPointer] !== valuesArray[rightPointer]) {
            return false;
        }
        leftPointer++;
        rightPointer--;
    }
    return true;
};
