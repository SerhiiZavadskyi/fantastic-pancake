type DP = { [key: number]: number };

function numberOfArithmeticSlices(nums: number[]): number {
	let res = 0;
	let n = nums.length;

	const dp: DP[] = new Array(n);

	for (let i = 0; i < n; i++) {
		dp[i] = {};
		for (let j = 0; j < i; j++) {
			const diff = nums[i] - nums[j];
			const prevCount = dp[j][diff] || 0;

			dp[i][diff] = (dp[i][diff] || 0) + prevCount + 1;
			res += prevCount;
		}
	}

	return res;
}

console.log(numberOfArithmeticSlices([7, 7, 7, 7, 7]));
