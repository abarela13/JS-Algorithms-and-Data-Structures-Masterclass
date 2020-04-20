import * as assert from "../../asserts.js";

/* 
	Write a recursive function called reverse() which accepts a string and returns a new string in reverse.
 */

/*
 * FUNCTION DEFINITION(S)
 */
function reverse(word) {
	if (word.length === 1) return word;
	return word.slice(word.length - 1) + reverse(word.slice(0, word.length - 1));
}

/*
 * TESTS CASES
 */
let input = "awesome";
let expected = "emosewa";
let output = assert.assertEqual(reverse(input), expected, `reverse of ${input}`);
console.log(output);

input = "rithmschool";
expected = "loohcsmhtir";
output = assert.assertEqual(reverse(input), expected, `reverse of ${input}`);
console.log(output);
