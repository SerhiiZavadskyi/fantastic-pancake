function findMaxLength(nums: number[]): number {
	let count = 0,
		result = 0
	const map = new Map<number, number>() // [one - zero] -> index

	for (let i = 0; i < nums.length; i++) {
		count += nums[i] === 0 ? 1 : -1

		if (count === 0) {
			result = Math.max(result, i + 1)
		}

		if (map.has(count)) {
			result = Math.max(result, i - map.get(count)!)
		} else {
			map.set(count, i)
		}
	}

	return result
}

console.log(findMaxLength([1, 1, 0, 1, 0]))
