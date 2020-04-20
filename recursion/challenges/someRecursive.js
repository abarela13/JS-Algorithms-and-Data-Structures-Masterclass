import * as assert from "../../asserts.js";

/* 
	Write a recursive function called someRecursive() which accepts an array and a callback.
	The function returns true if a single value in the array returns true when passed to the callback.
	Otherwise it returns false.
 */

/*
 * FUNCTION DEFINITION(S)
 */
const isOdd = (val) => val % 2 !== 0;

function someRecursive(array, callback) {
	if (array.length === 0) return false;
	if (callback(array[0])) return true;
	return someRecursive(array.slice(1), callback);
}

/*
 * TESTS CASES
 */

let input = someRecursive([1, 2, 3, 4], isOdd);
let expected = true;
let output = assert.assertEqual(input, expected, `has odd`);
console.log(output);

input = someRecursive([4, 6, 8, 9], isOdd);
expected = true;
output = assert.assertEqual(input, expected, `has odd`);
console.log(output);

input = someRecursive([4, 6, 8], isOdd);
expected = false;
output = assert.assertEqual(input, expected, `does not have odd`);
console.log(output);

input = someRecursive([4, 6, 8], (val) => val > 10);
expected = false;
output = assert.assertEqual(input, expected, `no value larger than 10`);
console.log(output);
