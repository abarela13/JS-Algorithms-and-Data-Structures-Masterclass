import * as assert from "../../asserts.js";

/* 
	Write a recursive function called nestedEvenSum().
	Return the sum of all even numbers in an object which may contain nested objects.
 */

/*
 * FUNCTION DEFINITION(S)
 */

function nestedEvenSum(obj, sum = 0) {
	for (var key in obj) {
		if (typeof obj[key] === "object") {
			sum += nestedEvenSum(obj[key]);
		} else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
			sum += obj[key];
		}
	}
	return sum;
}

/*
 * TESTS CASES
 */

var obj1 = {
	outer: 2,
	obj: {
		inner: 2,
		otherObj: {
			superInner: 2,
			notANumber: true,
			alsoNotANumber: "yup",
		},
	},
};

let input = nestedEvenSum(obj1);
let expected = 6;
let output = assert.assertEqual(input, expected, "3 object levels");
console.log(output);
console.log("\n");

var obj2 = {
	a: 2,
	b: {
		b: 2,
		bb: {
			b: 3,
			bb: {
				b: 2,
			},
		},
	},
	c: {
		c: {
			c: 2,
		},
		cc: "ball",
		ccc: 5,
	},
	d: 1,
	e: {
		e: {
			e: 2,
		},
		ee: "car",
	},
};

input = nestedEvenSum(obj2);
expected = 10;
output = assert.assertEqual(input, expected, "4 object levels");
console.log(output);
