import * as assert from "../asserts.js";

/*
	https://www.toptal.com/developers/sorting-algorithms
	Better for "live"/web sorting
	Time Complexity - O(n)^2
	Space Complexity - O(1)
 */

/*
 * FUNCTION DEFINITION(S)
 */
function insertionSort(arr) {
	console.log("arr", arr);

	for (let i = 1; i < arr.length; i++) {
		console.log("\n");
		let iValue = arr[i];
		console.log("i - ", i, "| iValue - ", iValue);
		let lookupIndex;

		for (lookupIndex = i - 1; lookupIndex > -1 && arr[lookupIndex] > iValue; lookupIndex--) {
			// value at j will be "shifted" to "j+1", until statement is false
			arr[lookupIndex + 1] = arr[lookupIndex];
		}

		// once out of loop assign
		arr[lookupIndex + 1] = iValue;
	}

	console.log("Result |", arr);
	return arr;
}

/*
 * TESTS CASES
 */
let input = [2, 1, 34, 22, 10, 19, 17];
let expected = [1, 2, 10, 17, 19, 22, 34];
let output = assert.assertArraysEqual(insertionSort(input), expected, "sort numbers in ascending order");
console.log(output);
