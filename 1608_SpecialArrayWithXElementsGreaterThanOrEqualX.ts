function specialArray(nums: number[]): number {
	const count = new Array(nums.length + 1).fill(0)

	for (const n of nums) {
		//const i = n < nums.length ? n : nums.length
		count[Math.min(n, nums.length)]++
	}

	let x = 0
	for (let i = nums.length - 1; i >= 0; i--) {
		x += count[i]

		if (i === x) {
			return x
		}
	}

	return -1
}

function specialArraySorting(nums: number[]): number {
	nums.sort((a, b) => a - b)
	let i = 0
	let prev = -1
	let total = nums.length

	while (i < nums.length) {
		if (nums[i] === total || (prev < total && total < nums[i])) {
			return total
		}

		while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
			i++
		}

		prev = nums[i]
		i++
		total = nums.length - i
	}

	return -1
}

console.log(specialArray([0, 4, 3, 0, 4]))

console.log(specialArraySorting([0, 4, 3, 0, 4]))
