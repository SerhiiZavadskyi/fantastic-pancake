function maxSumAfterPartitioning(arr: number[], k: number): number {
	const dp = new Array(k).fill(0);
	dp[0] = arr[0];

	for (let i = 1; i < arr.length; i++) {
		let currMax = 0;
		let maxAtIndex = 0;

		for (let j = i; j > i - k; j--) {
			if (j < 0) break;

			currMax = Math.max(currMax, arr[j]);
			const windowSize = i - j + 1;
			const currSum = currMax * windowSize;
			const subSum = j > 0 ? dp[(j - 1) % k] : dp[dp.length - 1];

			maxAtIndex = Math.max(maxAtIndex, currSum + subSum);
		}

		dp[i % k] = maxAtIndex;
	}
	console.log(dp);

	return dp[(arr.length - 1) % k];
}

console.log(maxSumAfterPartitioning([1, 4, 1, 5, 7, 3, 6, 1, 9, 9, 3], 4));
