/* 
    Whenever you are testing one of your functions, you want to similarly apply CATEGORICAL REASONING
    to identify test cases that sufficiently explore the full contract of the code under test.
 */
export function assertEqual(actual, expected, testName) {
	if (actual === expected) {
		return `PASSED [${testName}]`;
	} else {
		return `FAILED [${testName}] Expected "${expected}", but got "${actual}"`;
	}
}

export function assertArraysEqual(actual, expected, testName) {
	const failure = `FAILED [${testName}] Expected "${expected}", but got "${actual}"`;
	const success = `PASSED [${testName}]`;

	if (typeof actual !== typeof expected) {
		return failure;
	}

	if (actual.length !== expected.length) {
		return failure;
	}

	for (let i = 0; i < actual.length; i++) {
		if (actual[i] !== expected[i]) return failure;
	}

	return success;
}

export function assertObjectsEqual(actual, expected, testName) {
	if (JSON.stringify(actual) === JSON.stringify(expected)) {
		return `PASSED [${testName}]`;
	} else {
		return `FAILED [${testName}] Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}`;
	}
}

export function assertWithinRange(low, high, actual, testName) {
	if (actual >= low && actual <= high) {
		return `PASSED [${testName}]`;
	} else {
		return `FAILED [${testName}] "${actual}" not within range ${low} to ${high}`;
	}
}
