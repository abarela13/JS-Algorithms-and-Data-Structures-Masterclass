import * as assert from "../../asserts.js";

/*
    indexOf() | findIndex() | includes()

    Complexity:
    Time - O(n)
 */
/*
 * FUNCTION DEFINITION(S)
 */
function linearSearch(array, value) {
	// Loop through array
	for (let i = 0; i < array.length; i++) {
		// Check if element equal to value
		if (array[i] === value) return i;
	}
	return -1;
}

/*
 * TESTS CASES
 */

let input = linearSearch([14465, 98, 4, 53, 64, 98, 13, 78], 53);
let expected = 3;
let output = assert.assertEqual(input, expected, "find index of 53");
console.log(output);
