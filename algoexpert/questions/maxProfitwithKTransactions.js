import * as assert from "../../asserts.js";

function maxProfitWithKTransactions(prices, k) {
	if (!prices.length) return 0;

	const profits = [];

	for (let i = 0; i < k + 1; i++) {
		const row = new Array(prices.length).fill(0);
		profits.push(row);
	}

	for (let i = 1; i < k + 1; i++) {
		let maxThusFar = -Infinity;

		for (let j = 1; j < prices.length; j++) {
			maxThusFar = Math.max(maxThusFar, profits[i - 1][j - 1] - prices[j - 1]);
			profits[i][j] = Math.max(profits[i][j - 1], maxThusFar + prices[j]);
		}
	}
	return profits[k][prices.length - 1];
}

let input = maxProfitWithKTransactions([5, 11, 3, 50, 60, 90], 2);
let expected = 93;
let output = assert.assertEqual(input, expected, "testing for 93");
console.log(output);
console.log(maxProfitWithKTransactions([5, 11, 3, 50, 60, 90], 2));
