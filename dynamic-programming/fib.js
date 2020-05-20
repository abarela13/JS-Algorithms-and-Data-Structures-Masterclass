import * as assert from "../../asserts.js";

/* 
	Write a recursive function called fib() which accepts a number and returns the nth number in the Fibonacci sequence.
	Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
 */

/*
 * FUNCTION DEFINITION(S)
 */
function fib_memoization(n, values = [0, 1, 1]) {
	if (n <= 2) return 1;
	if (values[n] !== undefined) return values[n];

	const result = fib_memoization(n - 1, values) + fib_memoization(n - 2, values);
	values[n] = result;

	return result;
}

function fib_tabulation(n) {
	if (n <= 2) return 1;

	const values = [0, 1, 1];

	for (let i = 3; i <= n; i++) {
		values[i] = values[i - 1] + values[i - 2];
	}

	return values[n];
}

/*
 * TESTS CASES
 */
//
let input = 3;
let expected = 2;
let output = assert.assertEqual(fib_tabulation(input), expected, `Fibonacci to ${input} index`);
console.log(output);

input = 4;
expected = 3;
output = assert.assertEqual(fib_tabulation(input), expected, `Fibonacci to ${input} index`);
console.log(output);

input = 10;
expected = 55;
output = assert.assertEqual(fib_tabulation(input), expected, `Fibonacci to ${input} index`);
console.log(output);

input = 28;
expected = 317811;
output = assert.assertEqual(fib_tabulation(input), expected, `Fibonacci to ${input} index`);
console.log(output);

input = 35;
expected = 9227465;
output = assert.assertEqual(fib_tabulation(input), expected, `Fibonacci to ${input} index`);
console.log(output);
