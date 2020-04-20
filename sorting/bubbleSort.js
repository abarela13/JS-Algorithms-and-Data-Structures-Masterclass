import * as assert from "../asserts.js";

/*
	https://www.toptal.com/developers/sorting-algorithms
	Best for almost sorted
	Time Complexity - O(n)^2
	Space Complexity - O(1)
 */

/*
 * FUNCTION DEFINITION(S)
 */
/* 
// OPTIMIZED VERSION OF BUBBLE SORT
function bubbleSort(arr) {
	for (var i = arr.length; i > 0; i--) {
		var noSwap;

		for (var j = 0; j < i - 1; j++) {
			console.log("Checking:", arr.slice(0, i), `${arr[j]} vs ${arr[j + 1]}`);
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				noSwap = false;
			}
		}
		if (noSwap) break;

		console.log(`Iteration Largest Value: ${arr[j]}`);
	}
	console.log("Result |", arr);
	return arr;
}
 */

// ES2015 Version
function bubbleSort(arr) {
	const swap = (arr, index1, index2) => {
		// Set index 1 to equal index 2 and vice versa
		[arr[index1], arr[index2]] = [arr[index2], arr[index1]];
	};

	// Every iteration will decrease by one value, due to the largest array value "sinking" to the bottom
	for (let i = arr.length; i > 0; i--) {
		let noSwap;
		for (let j = 0; j < i - 1; j++) {
			console.log("Checking:", arr.slice(0, i), `${arr[j]} vs ${arr[j + 1]}`);
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
				noSwap = false;
			}
		}

		if (noSwap) break;
	}
	console.log("Result |", arr);
	return arr;
}

bubbleSort([8, 1, 5, 6, 2, -3, 4, 7]);
console.log("\n");
/*
 * TESTS CASES
 */
let input = [6, 4, 15, 10];
let expected = [4, 6, 10, 15];
let output = assert.assertArraysEqual(bubbleSort(input), expected, "sort numbers in ascending order");
console.log(output);
