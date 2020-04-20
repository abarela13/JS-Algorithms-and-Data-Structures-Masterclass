import * as assert from "../../asserts.js";

/* 
	Write a function called stringifyNumbers() which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!
 */
/*
 * FUNCTION DEFINITION(S)
 */

function stringifyNumbers(obj) {
	const newObj = {};

	for (let key in obj) {
		if (typeof obj[key] === "number") {
			newObj[key] = obj[key].toString();
		} else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
			newObj[key] = stringifyNumbers(obj[key]);
		} else {
			newObj[key] = obj[key];
		}
	}
	return newObj;
}



/*
 * TESTS CASES
 */

let input = stringifyNumbers({
	num: 1,
	test: [],
	data: {
		val: 4,
		info: {
			isRight: true,
			random: 66,
		},
	},
});
let expected = {
	num: "1",
	test: [],
	data: {
		val: "4",
		info: {
			isRight: true,
			random: "66",
		},
	},
};
let output = assert.assertArraysEqual(input, expected, "convert numbers to strings");

console.log("original");
console.log(
	JSON.stringify({
		num: 1,
		test: [],
		data: {
			val: 4,
			info: {
				isRight: true,
				random: 66,
			},
		},
	})
);

console.log("\n");
console.log("expected");
console.log(JSON.stringify(expected));

console.log("\n");
console.log("processed");
console.log(JSON.stringify(input));

console.log("\n");
console.log(output);
