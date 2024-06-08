function checkSubarraySum(nums: number[], k: number): boolean {
	const mapRemainder = new Map([[0, -1]])
	let sum = 0

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i]
		const remainder = sum % k

		if (!mapRemainder.has(remainder)) {
			mapRemainder.set(remainder, i)
		} else if (i - (mapRemainder.get(remainder) ?? 0) > 1) {
			return true
		}
	}

	return false
}

function checkSubarraySum2(nums: number[], k: number): boolean {
	for (let i = 0; i < nums.length; i++) {
		let sum = 0
		for (let j = i; j < nums.length; j++) {
			sum += nums[j]

			if (sum % k === 0 && Math.abs(i - j) > 0) {
				return true
			}
		}
	}

	return false
}

console.log(checkSubarraySum([2, 4, 3], 6))
