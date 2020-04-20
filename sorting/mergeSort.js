import * as assert from "../asserts.js";

/*
	https://www.toptal.com/developers/sorting-algorithms
	https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11072020
	Best for almost sorted
	Time Complexity - O(n log n)
	Space Complexity - O(n)
 */

/*
 * FUNCTION DEFINITION(S)
 */

// Recrusive Merge Sort
function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left, right);
}

function merge(arr1, arr2) {
	let results = [];
	let i = 0;
	let j = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			results.push(arr1[i]);
			i++;
		} else {
			results.push(arr2[j]);
			j++;
		}
	}

	while (i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}

	while (j < arr2.length) {
		results.push(arr2[j]);
		j++;
	}

	return results;
}

mergeSort([8, 1, 5, 6, 2, -3, 4, 7]);
console.log("\n");
/*
 * TESTS CASES
 */
let input = [6, 4, 15, 10];
let expected = [4, 6, 10, 15];
let output = assert.assertArraysEqual(mergeSort(input), expected, "sort numbers in ascending order");
console.log(output);
