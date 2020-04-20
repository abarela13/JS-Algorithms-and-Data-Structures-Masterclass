import * as assert from "../../asserts.js";

/*
    Complexity:
    Time - O(log n)
 */
/*
 * FUNCTION DEFINITION(S)
 */
function binarySearch(array, value) {
	var start = 0;
	var end = array.length - 1;
	var middle = Math.floor((start + end) / 2);

	while (array[middle] !== value && start < end) {
		if (value < array[middle]) {
			// setting end to middle would be redundant since we know middle is not the value
			end = middle - 1;
		} else {
			start = middle + 1;
		}
		middle = Math.floor((start + end) / 2);
	}

	return array[middle] === value ? middle : -1;
}

/*
 * TESTS CASES
 */

console.log(binarySearch([1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19], 1)); // 0
console.log(binarySearch([1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19], 3)); // 1
console.log(binarySearch([1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19], 19)); // 12
console.log(binarySearch([1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19], 21)); // -1
