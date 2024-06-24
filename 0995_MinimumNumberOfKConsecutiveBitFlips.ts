function minKBitFlips(nums: number[], k: number): number {
	let currWindowFlips = 0
	let res = 0

	for (let i = 0; i < nums.length; i++) {
		if (i - k >= 0 && nums[i - k] === 2) {
			currWindowFlips--
		}
		if ((nums[i] + currWindowFlips) % 2 === 0) {
			if (i + k > nums.length) {
				return -1
			}

			res++
			currWindowFlips++
			nums[i] = 2
		}
	}

	return res
}

console.log(minKBitFlips([1, 1, 0], 2))
