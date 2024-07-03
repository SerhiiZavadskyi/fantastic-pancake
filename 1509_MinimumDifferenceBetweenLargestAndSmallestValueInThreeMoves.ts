function minDifference(nums: number[]): number {
	if (nums.length < 5) return 0

	nums.sort((a, b) => a - b)
	let res = Number.MAX_SAFE_INTEGER

	for (let l = 0; l < 4; l++) {
		const r = nums.length - 4 + l

		res = Math.min(res, nums[r] - nums[l])
	}

	return res
}

function minDifference2(nums: number[]): number {
	if (nums.length < 5) return 0
	nums.sort((a, b) => a - b)
	const minFour = nums.slice(0, 4)
	const maxFour = nums.slice(-4)
	let res = maxFour[0] - minFour[0]

	for (let i = 1; i < 4; i++) {
		res = Math.min(res, maxFour[i] - minFour[i])
	}

	return res
}

console.log(minDifference2([1, 5, 0, 10, 14]))
