import * as assert from "../asserts.js";

/*
	https://www.toptal.com/developers/sorting-algorithms
	https://cs.slides.com/colt_steele/intermediate-sorting-algorithms
	Take advantage of inherent property of numbers
	Time Complexity - O(nk) // k - number of digits(average)
	Space Complexity - O(n+k)
 */

/*
 * FUNCTION DEFINITION(S)
 */
function getDigit(num, i) {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
	let maxDigits = 0;
	for (let i = 0; i < nums.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(nums[i]));
	}
	return maxDigits;
}

function radixSort(nums) {
	let maxDigitCount = mostDigits(nums);

	for (let k = 0; k < maxDigitCount; k++) {
		let digitBuckets = Array.from({ length: 10 }, () => []);

		for (let i = 0; i < nums.length; i++) {
			let digit = getDigit(nums[i], k);
			digitBuckets[digit].push(nums[i]);
		}

		nums = [].concat(...digitBuckets);
	}
	return nums;
}

/*
 * TESTS CASES
 */
let input = [63, 89, 53, 41, 100, 91, 20, 18, 52, 58, 31, 22, 28, 17, 49, 33, 76, 54, 50, 88, 6, 15, 95, 36, 59, 30, 82, 10, 85, 19, 2, 34, 57, 93, 1, 35, 55, 98, 65, 84, 16, 61, 90, 66, 3, 44, 43, 38, 26, 12];
let expected = [1, 2, 3, 6, 10, 12, 15, 16, 17, 18, 19, 20, 22, 26, 28, 30, 31, 33, 34, 35, 36, 38, 41, 43, 44, 49, 50, 52, 53, 54, 55, 57, 58, 59, 61, 63, 65, 66, 76, 82, 84, 85, 88, 89, 90, 91, 93, 95, 98, 100];
let output = assert.assertArraysEqual(radixSort(input), expected, "sort numbers in ascending order");
console.log(output);
