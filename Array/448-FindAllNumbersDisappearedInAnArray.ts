function findDisappearedNumbers(nums: number[]): number[] {
	for (const num of nums) {
		const n = Math.abs(num)
		if (nums[n - 1] > 0) {
			nums[n - 1] *= -1
		}
	}

	const res: number[] = []

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) res.push(i + 1)
	}

	return res
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
