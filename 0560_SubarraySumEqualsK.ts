function subarraySum(nums: number[], k: number): number {
	const prefixSums = new Map([[0, 1]]) // [prefixSum] => count
	let sum = 0
	let res = 0

	for (const n of nums) {
		sum += n
		const diff = sum - k

		res += prefixSums.get(diff) ?? 0
		prefixSums.set(sum, (prefixSums.get(sum) ?? 0) + 1)
	}

	return res
}

// O(n^2)
function subarraySum2(nums: number[], k: number): number {
	let res = 0

	for (let i = 0; i < nums.length; i++) {
		let sum = 0
		for (let j = i; j < nums.length; j++) {
			sum += nums[j]

			if (sum === k) {
				res++
			}
		}
	}

	return res
}

console.log(subarraySum([1, 2, 3], 3))
