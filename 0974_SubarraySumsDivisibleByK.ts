function subarraysDivByK(nums: number[], k: number): number {
	const prefixSums = new Map<number, number>() // [prefixSum] => count
	prefixSums.set(0, 1)
	let res = 0,
		sum = 0

	for (const n of nums) {
		sum += n
		const remainder = ((sum % k) + k) % k

		res += prefixSums.get(remainder) ?? 0
		prefixSums.set(remainder, (prefixSums.get(remainder) ?? 0) + 1)
	}

	return res
}

function subarraysDivByK2(nums: number[], k: number): number {
	let res = 0

	for (let i = 0; i < nums.length; i++) {
		let sum = 0
		for (let j = i; j < nums.length; j++) {
			sum += nums[j]

			if (sum % k === 0) {
				res++
			}
		}
	}

	return res
}

console.log(subarraysDivByK([-1, 2, 9], 2))
