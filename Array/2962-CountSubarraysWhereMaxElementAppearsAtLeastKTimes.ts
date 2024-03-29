function countSubarrays(nums: number[], k: number): number {
	let maxCount = 0
	const maxNum = Math.max(...nums)
	let res = 0
	let l = 0

	for (let r = 0; r < nums.length; r++) {
		if (nums[r] === maxNum) maxCount++

		while (maxCount === k) {
			if (nums[l] === maxNum) maxCount--
			l++
		}
		res += l
	}

	return res
}

function countSubarrays2(nums: number[], k: number): number {
	let maxCount = 0
	const maxNum = Math.max(...nums)
	let res = 0
	let l = 0

	for (let r = 0; r < nums.length; r++) {
		if (nums[r] === maxNum) maxCount++

		while (maxCount > k || (maxCount === k && maxNum !== nums[l])) {
			if (nums[l] === maxNum) maxCount--
			l++
		}

		if (maxCount === k) {
			res += l + 1
		}
	}

	return res
}

console.log(countSubarrays2([1, 3, 2, 3, 3], 2))
