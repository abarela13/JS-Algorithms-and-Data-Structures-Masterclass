// Tester Arrays
let arg1 = [1, 2, 3, 2];
let arg2 = [9, 1, 4, 4];
let arr3 = [1, 2, 3, 2, 5];
let arr4 = [9, 1, 4, 4, 11];

/*
 * Check that all values in first array have corresponding (unique) value in second array
 */
function same1(arr1, arr2) {
	// Check that array lengths match
	if (arr1.length !== arr2.length) {
		return false;
	}
	for (let index = 0; index < arr1.length; index++) {
		// Set value to look for in second array
		let searchIndex = arr2.indexOf(arr1[index] ** 2);

		// If searchIndex value is not found then return false
		if (searchIndex === -1) {
			return false;
		}

		//Remove element at stored index position
		arr2.splice(searchIndex, 1);
	}
	return true;
}

/*
 * Frequency Counter Version (Refactored)
 */
function same2(arr1, arr2) {
	// Check that array lengths match
	if (arr1.length !== arr2.length) {
		return false;
	}

	let frequencyCounter1 = {};
	let frequencyCounter2 = {};

	for (let val of arr1) {
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
	}
	for (let val of arr2) {
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
	}

	console.log(frequencyCounter1);
	console.log(frequencyCounter2);

	for (let key in frequencyCounter1) {
		if (!(key ** 2 in frequencyCounter2)) {
			return false;
		}
		if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
			return false;
		}
	}
	return true;
}

same1(arg1, arg2);
same2(arg1, arg2);
same2(arr3, arr4);
