import * as assert from "../../asserts.js";

/* 
	Write a recursive function called capitalizeWords().
	Given an array of words, return a new array containing each word capitalized.
 */
/*
 * FUNCTION DEFINITION(S)
 */

function capitalizeWords(words) {
	if (words.length === 0) {
		return [];
	}

	return [words.shift().toUpperCase()].concat(capitalizeWords(words));
}

/*
 * TESTS CASES
 */

let input = capitalizeWords(["i", "am", "learning", "recursion"]);
let expected = ["I", "AM", "LEARNING", "RECURSION"];
let output = assert.assertArraysEqual(input, expected, "capitalize all words");
console.log(output);
