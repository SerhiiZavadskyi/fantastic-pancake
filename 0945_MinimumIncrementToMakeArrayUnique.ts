function minIncrementForUnique(nums: number[]): number {
	let res = 0

	nums.sort((a, b) => a - b)

	for (let i = 1; i < nums.length; i++) {
		if (nums[i - 1] >= nums[i]) {
			res += 1 + nums[i - 1] - nums[i]
			nums[i] = nums[i - 1] + 1
		}
	}

	return res
}

function minIncrementForUnique2(nums: number[]): number {
	const count = new Map()
	nums.forEach((n) => count.set(n, (count.get(n) ?? 0) + 1))

	let res = 0
	const max = Math.max(...nums)
	for (let i = 0; i < nums.length + max; i++) {
		if (count.has(i) && count.get(i) > 1) {
			const rest = count.get(i) - 1
			count.set(i + 1, (count.get(i + 1) ?? 0) + rest)
			res += rest
		}
	}

	return res
}

console.log(minIncrementForUnique2([3, 2, 1, 2, 1, 7]))
