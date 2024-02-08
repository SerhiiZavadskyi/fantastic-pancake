function numSquares(n: number): number {
	const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
	dp[0] = 0;

	for (let i = 1; i <= n; i++) {
		let min = Number.MAX_SAFE_INTEGER;

		for (let j = 1; j * j <= i; j++) {
			min = Math.min(min, dp[i - j * j] + 1);
		}

		dp[i] = min;
	}

	return dp[n];
}

console.log(numSquares(13));
