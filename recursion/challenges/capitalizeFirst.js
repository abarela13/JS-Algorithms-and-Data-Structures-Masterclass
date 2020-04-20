import * as assert from "../../asserts.js";

/* 
	Write a recursive function called capitalizeFirst().
	Given an array of strings, capitalize the first letter of each string in the array.
 */

/*
 * FUNCTION DEFINITION(S)
 */

function capitalizeFirst(words) {
	if (words.length === 0) {
		return [];
	}

	let word = words[0];

	return [word[0].toUpperCase() + word.slice(1)].concat(capitalizeFirst(words.slice(1)));
}

/*
 * TESTS CASES
 */

let input = capitalizeFirst(["car", "taco", "banana"]);
let expected = ["Car", "Taco", "Banana"];
let output = assert.assertArraysEqual(input, expected, "some test");
console.log(output);
