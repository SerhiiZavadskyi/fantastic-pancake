function minCostClimbingStairs(cost: number[]): number {
	const n = cost.length;
	if (n === 0) return 0;
	if (n === 1) return cost[0];

	const dp: number[] = new Array(n);

	dp[0] = cost[0];
	dp[1] = cost[1];

	for (let i = 2; i < n; i++) {
		dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
	}
	console.log(dp);

	return Math.min(dp[n - 1], dp[n - 2]);
}
console.log(minCostClimbingStairs([2, 1, 2, 3, 4, 5, 6]));
