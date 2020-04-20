import * as assert from "../../asserts.js";

/* 
    Write a function called power which accepts a base and an exponent.
    The function should return the power of the base to the exponent.
    This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents.
 */

/*
 * FUNCTION DEFINITION(S)
 */
function power(base, exponent) {
	if (exponent === 0) return 1;
	return base * power(base, exponent - 1);
}

/*
 * TESTS CASES
 */
//
let input = power(2, 0);
let output = assert.assertEqual(input, 1, "power of 0");
console.log(output); // 1

input = power(2, 2);
output = assert.assertEqual(input, 4, "power of 2");
console.log(output); // 4

input = power(2, 4);
output = assert.assertEqual(input, 16, "power of 4");
console.log(output); // 16
