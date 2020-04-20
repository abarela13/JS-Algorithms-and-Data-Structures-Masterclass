import * as assert from "../../asserts.js";

/* 
	Write a recursive function called isPalindrome() which returns true if the string passed to it is a palindrome
	(reads the same forward and backward). Otherwise it returns false.
 */

/*
 * FUNCTION DEFINITION(S)
 */
/* 
function isPalindrome(str) {
	if (str.length === 1) return true;
	if (str.length === 2) return str[0] === str[1];
	if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
	return false;
}
 */
// my version
function isPalindrome(word) {
	if (word.length === 1) return true;
	if (word.length === 2) return word[0] === word[1];

	for (let i = 0; i < Math.floor(word.length / 2); i++) {
		if (word[i] !== word[word.length - i - 1]) return false;
	}
	return true;
}

/*
 * TESTS CASES
 */

let input = "awesome";
let expected = false;
let output = assert.assertEqual(isPalindrome(input), expected, `${input} not a palindrome`);
console.log(output);

input = "foobar";
expected = false;
output = assert.assertEqual(isPalindrome(input), expected, `${input} not a palindrome`);
console.log(output);

input = "tacocat";
expected = true;
output = assert.assertEqual(isPalindrome(input), expected, `${input} is a palindrome`);
console.log(output);

input = "amanaplanacanalpanama";
expected = true;
output = assert.assertEqual(isPalindrome(input), expected, `${input} is a palindrome`);
console.log(output);

input = "amanaplanacanalpandemonium";
expected = false;
output = assert.assertEqual(isPalindrome(input), expected, `${input} not a palindrome`);
console.log(output);
