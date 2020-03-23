let testerObj = {
	testArray: Array.from({
			length: 30
		},
		() => Math.ceil(Math.random() * 9)
	),
	windowSize: Math.ceil(Math.random() * 2 + 1)
};

function maxWindowSum(arr, num) {
	let maxSum = 0;
	let tempSum = 0;

	// Edge Case (array without values)
	if (arr.length < num) return null;

	// Sum of first "num" elements
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}

	tempSum = maxSum;

	for (let i = num; i < arr.length; i++) {
		// Array sum minus first value, then adding next value
		tempSum = tempSum - arr[i - num] + arr[i];

		// Keep whichever value is larger
		maxSum = Math.max(maxSum, tempSum);
	}

	return maxSum;
}

console.log(maxWindowSum(testerObj.testArray, testerObj.windowSize));