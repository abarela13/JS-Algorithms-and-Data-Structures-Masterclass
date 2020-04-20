import * as assert from "../../asserts.js";

/* 
    Write a function called recursiveRange() which accepts a number and adds up all the numbers from 0 to the number passed to the function.
 */

/*
 * FUNCTION DEFINITION(S)
 */
function recursiveRange(base) {
	if (base === 1) return 1;
	return base + recursiveRange(base - 1);
}

/*
 * TESTS CASES
 */
//
let input = 6;
let expected = 21;
let output = assert.assertEqual(recursiveRange(input), expected, `product of of ${input}`);
console.log(output);

input = 10;
expected = 55;
output = assert.assertEqual(recursiveRange(input), expected, `product of of ${input}`);
console.log(output);
