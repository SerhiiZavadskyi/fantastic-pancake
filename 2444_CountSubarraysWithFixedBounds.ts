function countSubarrays(nums: number[], minK: number, maxK: number): number {
	let res = 0,
		min = -1,
		max = -1,
		j = -1

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] < minK || nums[i] > maxK) j = i
		if (nums[i] === minK) min = i
		if (nums[i] === maxK) max = i

		res += Math.max(0, Math.min(min, max) - j)
	}

	return res
}

console.log(countSubarrays([1, 3, 5, 2, 7, 5], 1, 5))
