function canPartition(nums: number[]): boolean {
	let dp = new Set<number>();
	dp.add(0);
	const sum = nums.reduce((acc, curr) => acc + curr, 0);
	const target = Math.floor(sum / 2);
	if (sum % 2) {
		return false;
	}

	for (let i = 0; i < nums.length; i++) {
		const nextDp = new Set<number>();
		for (const n of dp) {
			nextDp.add(n + nums[i]);
			nextDp.add(n);
		}

		dp = nextDp;
	}

	return dp.has(target);
}

console.log(canPartition([1, 5, 11, 5]));
