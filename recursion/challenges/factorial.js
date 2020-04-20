import * as assert from "../../asserts.js";

/* 
    Write a function factorial() which accepts a number and returns the factorial of that number.
    A factorial is the product of an integer and all the integers below it;
    e.g., factorial four (4!) is equal to 24, because 4*3*2*1 equals 24.
    factorial zero (0!) is always 1.
 */

/*
 * FUNCTION DEFINITION(S)
 */
function factorial(base) {
	if (base < 0) return 0;
	if (base <= 1) return 1;
	return base * factorial(base - 1);
}

/*
 * TESTS CASES
 */
//
let input = factorial(1);
let output = assert.assertEqual(input, 1, "factorial of 1");
console.log(output); // 1

input = factorial(2);
output = assert.assertEqual(input, 2, "factorial of 2");
console.log(output); // 2

input = factorial(4);
output = assert.assertEqual(input, 24, "factorial of 4");
console.log(output); // 24

input = factorial(7);
output = assert.assertEqual(input, 5040, "factorial of 7");
console.log(output); // 5040
