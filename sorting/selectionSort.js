import * as assert from "../asserts.js";

/*
	https://www.toptal.com/developers/sorting-algorithms
	Better when memory is a concern
	Time Complexity - O(n)^2
	Space Complexity - O(1)
 */

/*
 * FUNCTION DEFINITION(S)
 */

// ES2015 Version
function selectionSort(arr) {
	const swap = (arr, index1, index2) => {
		// Set index 1 to equal index 2 and vice versa
		[arr[index1], arr[index2]] = [arr[index2], arr[index1]];
	};

	for (let i = 0; i < arr.length; i++) {
		console.log(arr.slice(i));

		let min = i;

		for (let j = i + 1; j < arr.length; j++) {
			console.log(`${arr[min]} vs ${arr[j]}`);

			if (arr[j] < arr[min]) {
				min = j;
			}
		}

		if (i !== min) swap(arr, i, min);

		console.log(`arr[${i}] ▶ ${arr[i]}`);
		console.log("\n");
	}

	console.log("Result [${i}]|", arr);
	return arr;
}

/*
 * TESTS CASES
 */
let input = [0, 2, 34, 22, 10, 19, 17];
let expected = [0, 2, 10, 17, 19, 22, 34];
let output = assert.assertArraysEqual(selectionSort(input), expected, "sort numbers in ascending order");
console.log(output);
