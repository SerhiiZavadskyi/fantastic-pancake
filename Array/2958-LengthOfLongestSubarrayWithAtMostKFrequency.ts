function maxSubarrayLength(nums: number[], k: number): number {
	let res = 0
	let l = 0
	const map = new Map()

	for (let r = 0; r < nums.length; r++) {
		map.set(nums[r], (map.get(nums[r]) ?? 0) + 1)

		while (map.get(nums[r]) > k) {
			map.set(nums[l], map.get(nums[l]) - 1)
			l++
		}

		res = Math.max(res, r - l + 1)
	}

	return res
}

console.log(maxSubarrayLength([1, 4, 4, 3], 1))
