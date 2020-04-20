import * as assert from "../../asserts.js";

/* 
	Write a recursive function called flatten() which accepts an array of arrays and returns a new array with all values flattened.
 */

/*
 * FUNCTION DEFINITION(S)
 */
function flatten(arr) {
	let result = [];

	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			result = result.concat(flatten(arr[i]));
		} else {
			result.push(arr[i]);
		}
	}

	return result;
}

/*
 * TESTS CASES
 */
let input = flatten([1, 2, 3, [4, 5]]);
let expected = [1, 2, 3, 4, 5];
let output = assert.assertArraysEqual(input, expected, "some test");
console.log(output);

input = flatten([1, [2, [3, 4], [[5]]]]);
expected = [1, 2, 3, 4, 5];
output = assert.assertArraysEqual(input, expected, "some test");
console.log(output);

input = flatten([[1], [2], [3]]);
expected = [1, 2, 3];
output = assert.assertArraysEqual(input, expected, "some test");
console.log(output);

input = flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]);
expected = [1, 2, 3];
output = assert.assertArraysEqual(input, expected, "some test");
console.log(output);
