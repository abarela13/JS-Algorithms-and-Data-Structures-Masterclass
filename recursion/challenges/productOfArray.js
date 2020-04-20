import * as assert from "../../asserts.js";

/* 
    Write a function called productOfArray() which takes in an array of numbers and returns the product of them all.
 */

/*
 * FUNCTION DEFINITION(S)
 */
function productOfArray(arr) {
	if (arr.length === 0) {
		return 1;
	}
	return arr[0] * productOfArray(arr.slice(1));
}

/*
 * TESTS CASES
 */
//
let input = [1, 2, 3];
let expected = 6;
let output = assert.assertEqual(productOfArray(input), expected, `product of of ${input}`);
console.log(output);

input = [1, 2, 3, 10];
expected = 60;
output = assert.assertEqual(productOfArray(input), expected, `product of of ${input}`);
console.log(output);
