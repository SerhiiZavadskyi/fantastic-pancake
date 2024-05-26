function findMaxK(nums: number[]): number {
	const set = new Set()
	let max = -1

	for (const n of nums) {
		set.add(-n)

		if (set.has(n)) {
			max = Math.max(max, Math.abs(n))
		}
	}

	return max
}

function findMaxK2(nums: number[]): number {
	nums.sort((a, b) => a - b)
	let l = 0,
		r = nums.length - 1

	while (l < r) {
		if (-nums[l] === nums[r]) {
			return nums[r]
		} else if (Math.abs(nums[l]) < nums[r]) {
			r--
		} else {
			l++
		}
	}

	return -1
}

console.log(
	findMaxK2([
		-30, 34, 1, 32, 26, -9, -30, 22, -49, 29, 48, 47, 38, 4, 43, 12, -1, -8, 11, -37, 32, 40, 9, 15, -34, -34, -16,
		-5, 26, -44, -36, -13, -16, 10, 39, -17, -22, 17, -16,
	])
)
