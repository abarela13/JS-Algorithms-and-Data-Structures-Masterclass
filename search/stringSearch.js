import * as assert from "../../asserts.js";

/*
    Complexity:
    Time - O(log n)
 */
/*
 * FUNCTION DEFINITION(S)
 */
function stringSearch(words, pattern) {
	let count = 0;

	for (let i = 0; i < words.length; i++) {
		for (let j = 0; j < pattern.length; j++) {
			if (pattern[j] !== words[i + j]) break;
			if (j === pattern.length - 1) count++;
		}
	}
	return count;
}

/*
 * TESTS CASES
 */
let input = stringSearch("lorie loled", "lol");
let output = assert.assertEqual(input, 1, "1 instance of pattern");
console.log(output);
