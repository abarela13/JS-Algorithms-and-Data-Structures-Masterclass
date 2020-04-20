import * as assert from "../../asserts.js";

/* 
	Write a function called collectStrings() which accepts an object and returns an array of all the values in the object that have a typeof string
 */
/*
 * FUNCTION DEFINITION(S)
 */

function collectStrings(obj) {
	let strArr = [];

	for (let key in obj) {
		if (typeof obj[key] === "string") {
			strArr.push(obj[key]);
		} else if (typeof obj[key] === "object") {
			strArr = strArr.concat(collectStrings(obj[key]));
		}
	}
	return strArr;
}
/* 
// Helper Function
function collectStrings(obj) {
	var stringsArr = [];

	function gatherStrings(o) {
		for (var key in o) {
			if (typeof o[key] === "string") {
				stringsArr.push(o[key]);
			} else if (typeof o[key] === "object") {
				return gatherStrings(o[key]);
			}
		}
	}

	gatherStrings(obj);

	return stringsArr;
}
 */
/*
 * TESTS CASES
 */

let input = {
	stuff: "foo",
	data: {
		val: {
			thing: {
				info: "bar",
				moreInfo: {
					evenMoreInfo: {
						weMadeIt: "baz",
					},
				},
			},
		},
	},
};

let expected = ["foo", "bar", "baz"];
let output = assert.assertArraysEqual(collectStrings(input), expected, "convert numbers to strings");
console.log(output);
