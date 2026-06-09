function minimumTotal(triangle: number[][]): number {
	const dp = new Array(triangle.length + 1).fill(0);

	for (let i = triangle.length - 1; i >= 0; i--) {
		const row = triangle[i] as number[];

		for (let i = 0; i < row.length; i++) {
			dp[i] = row[i]! + Math.min(dp[i], dp[i + 1]);
		}
	}

	return dp[0];
}

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
