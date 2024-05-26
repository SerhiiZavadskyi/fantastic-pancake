function numSubarrayProductLessThanK(nums: number[], k: number): number {
	if (k <= 1) {
		return 0
	}

	let res = 0
	let l = 0
	let product = 1

	for (let r = 0; r < nums.length; r++) {
		product *= nums[r]

		while (product >= k) {
			product /= nums[l]
			l++
		}
		res += r - l + 1
	}

	return res
}

//brute force 😒
function numSubarrayProductLessThanK2(nums: number[], k: number): number {
	if (k <= 1) {
		return 0
	}

	let res = 0

	for (let i = 0; i < nums.length; i++) {
		let product = 1
		for (let j = i; j < nums.length; j++) {
			product *= nums[j]

			if (product < k) {
				res++
			}
		}
	}

	return res
}

console.log(numSubarrayProductLessThanK2([10, 5, 2, 6], 100))
