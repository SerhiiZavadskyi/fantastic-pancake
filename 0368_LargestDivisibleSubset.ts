function largestDivisibleSubset(nums: number[]): number[] {
	nums.sort((a, b) => a - b);
	const dp = nums.map((num) => new Array(1).fill(num));

	let res: number[] = [];
	for (let i = nums.length - 1; i >= 0; i--) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[j] % nums[i] === 0) {
				const temp = [nums[i]].concat(dp[j]);
				dp[i] = temp.length > dp[i].length ? temp : dp[i];
			}
		}

		res = dp[i].length > res.length ? dp[i] : res;
	}

	return res;
}
console.log(largestDivisibleSubset([3, 4, 16, 8]));

function largestDivisibleSubsetDFS(nums: number[]): number[] {
	nums.sort((a, b) => a - b);
	const cache = new Map();

	function dfs(i: number): number[] {
		if (i === nums.length) {
			return [];
		}

		if (cache.has(i)) {
			return cache.get(i);
		}

		let res = [nums[i]];

		for (let j = i + 1; j < nums.length; j++) {
			if (nums[j] % nums[i] === 0) {
				const temp = [nums[i]].concat(dfs(j));

				if (temp.length > res.length) {
					res = temp;
				}
			}
		}
		cache.set(i, res);
		return res;
	}

	let result: number[] = [];
	for (let i = 0; i < nums.length; i++) {
		const temp = dfs(i);

		if (temp.length > result.length) {
			result = temp;
		}
	}
	return result;
}
