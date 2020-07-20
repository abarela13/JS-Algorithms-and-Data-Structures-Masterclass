/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2, carry = arguments[2]) {
    let node = null
    if (l1 || l2) {
        const val1 = l1 ? l1.val : 0
        const val2 = l2 ? l2.val : 0
        const next1 = l1 ? l1.next : null
        const next2 = l2 ? l2.next : null
        const val = carry ? val1 + val2 + 1 : val1 + val2
        node = new ListNode(val % 10)
        node.next = addTwoNumbers(next1, next2, val >= 10)
    } else if (carry) {
        node = new ListNode(1)
        node.next = null
    }
    return node
};

/*
var addTwoNumbers = function (l1, l2) {

    let sum = 0;
    let current = new ListNode(0);
    let result = current;

    while (l1 || l2) {

        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        current.next = new ListNode(sum % 10);
        current = current.next;

        sum = sum > 9 ? 1 : 0;
    }

    if (sum) {
        current.next = new ListNode(sum);
    }

    return result.next;
};
 */
// Initialize current node to dummy head of the returning list.
// Initialize carry to 00.
// Initialize pp and qq to head of l1l1 and l2l2 respectively.
// Loop through lists l1l1 and l2l2 until you reach both ends.
// Set xx to node pp's value. If pp has reached the end of l1l1, set to 00.
// Set yy to node qq's value. If qq has reached the end of l2l2, set to 00.
// Set sum = x + y + carrysum=x + y + carry.
// Update carry = sum / 10carry = sum / 10.
// Create a new node with the digit value of(sum \bmod 10)(summod10) and set it to current node's next, then advance current node to next.
// Advance both pp and qq.
// Check if carry = 1carry = 1, if so append a new node with digit 11 to the returning list.
// Return dummy head's next node.