function minDifficulty(jobDifficulty: number[], d: number): number {
	if (jobDifficulty.length < d) return -1;
	const cache: Record<string, number> = {};

	function dfs(i: number, d: number, currentMax: number): number {
		if (i === jobDifficulty.length) {
			return d === 0 ? 0 : Infinity;
		}

		if (d === 0) return Infinity;

		const key = `${i},${d},${currentMax}`;

		if (cache[key] !== undefined) {
			return cache[key];
		}

		currentMax = Math.max(currentMax, jobDifficulty[i]);

		const result = Math.min(
			dfs(i + 1, d, currentMax),
			currentMax + dfs(i + 1, d - 1, -1)
		);
		cache[key] = result;

		return result;
	}

	return dfs(0, d, -1);
}

function minDifficultyDP(jobDifficulty: number[], d: number) {
	const n = jobDifficulty.length;
	// if the number of days is greater than the number of jobs,
	// schedule cannot be formed
	if (n < d) {
		return -1;
	}

	const dp = Array.from(new Array(n), () =>
		new Array(d + 1).fill(Number.MAX_SAFE_INTEGER)
	);
	// on the last day with 1 task remaining the cost would be
	// the cost of the last task
	dp[n - 1][d] = jobDifficulty[n - 1];
	for (let i = n - 2; i >= 0; i--) {
		dp[i][d] = Math.max(dp[i + 1][d], jobDifficulty[i]);
	}
	for (let day = d - 1; day > 0; day--) {
		// we need to leave enough tasks for the remaining days
		for (let i = day - 1; i < n - (d - day); i++) {
			let hardest = 0;
			for (let j = i; j < n - (d - day); j++) {
				hardest = Math.max(hardest, jobDifficulty[j]);
				dp[i][day] = Math.min(dp[i][day], hardest + dp[j + 1][day + 1]);
			}
		}
	}

	return dp[0][1];
}
console.log(
	minDifficultyDP(
		[
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		],
		10
	)
);
