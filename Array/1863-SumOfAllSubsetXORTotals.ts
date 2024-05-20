function subsetXORSum(nums: number[]): number {
	const dfs = (i: number, sum: number): number => {
		if (i === nums.length) return sum

		return dfs(i + 1, sum ^ nums[i]) + dfs(i + 1, sum)
	}

	return dfs(0, 0)
}

function subsetXORSum2(nums: number[]): number {
	let sum = 0

	for (const n of nums) sum |= n

	return sum * Math.pow(2, nums.length - 1)
}

console.log(subsetXORSum2([5, 1, 6]))
