import * as assert from "../asserts.js";

/*
    https://www.toptal.com/developers/sorting-algorithms
 */

/*
 * FUNCTION DEFINITION(S)
 */
function numberAsc(num1, num2) {
	return num1 - num2;
}
function numberDesc(num1, num2) {
	return num2 - num1;
}

function byLengthAsc(str1, str2) {
	return str1.length - str2.length;
}

function byLengthDesc(str1, str2) {
	return str2.length - str1.length;
}

/*
 * TESTS CASES
 */
let input = [6, 4, 15, 10];
let expected = [4, 6, 10, 15];
let output = assert.assertArraysEqual(input.sort(numberAsc), expected, "sort numbers in ascending order");
console.log(output);

expected = [15, 10, 6, 4];
output = assert.assertArraysEqual(input.sort(numberDesc), expected, "sort numbers in descending order");
console.log(output);

input = ["steele", "colt", "data structures", "algorithms"];
expected = ["colt", "steele", "algorithms", "data structures"];
output = assert.assertArraysEqual(input.sort(byLengthAsc), expected, "sort by string lengths in ascending order");
console.log(output);

expected = ["data structures", "algorithms", "steele", "colt"];
output = assert.assertArraysEqual(input.sort(byLengthDesc), expected, "sort by string lengths in descending order");
console.log(output);
