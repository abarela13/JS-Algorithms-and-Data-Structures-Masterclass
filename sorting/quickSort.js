/*
	https://www.toptal.com/developers/sorting-algorithms
	Best for almost sorted
	Time Complexity - O(n log n)
	Space Complexity - O(1)
 */

/*
 * FUNCTION DEFINITION(S)
 */

// Quick Sort
function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		let pivotIndex = pivot(arr, left, right); //3
		//left
		quickSort(arr, left, pivotIndex - 1);
		//right
		quickSort(arr, pivotIndex + 1, right);
	}
	return arr;
}

function pivot(arr, start = 0, end = arr.length - 1) {
	const swap = (arr, idx1, idx2) => {
		[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	};

	// We are assuming the pivot is always the first element of arr
	let pivot = arr[start];
	let swapIdx = start;

	for (let i = start + 1; i <= end; i++) {
		if (pivot > arr[i]) {
			swapIdx++;
			swap(arr, swapIdx, i);
		}
	}

	// Swap the pivot from the start the swapPoint
	swap(arr, start, swapIdx);
	return swapIdx;
}

/*
 * TESTS CASES
 */
let input = [57, 1, 8, 11, 6, 2, -13, 214, 187];
let expected = [-13, 1, 2, 6, 8, 11, 57, 187, 214];

quickSort(input);

console.log(input);
