function numberOfSubarrays(nums: number[], k: number): number {
	let res = 0
	let odd = 0
	let l = 0
	let mid = 0

	for (let r = 0; r < nums.length; r++) {
		if (nums[r] % 2) {
			odd++
		}

		while (odd > k) {
			if (nums[l] % 2) {
				odd--
			}

			l++
			mid = l
		}

		if (odd === k) {
			while (!(nums[mid] % 2)) {
				mid++
			}
			res += mid - l + 1
		}
	}

	return res
}

//Time Limit Exceeded 👎👎 O(n^2)
function numberOfSubarrays2(nums: number[], k: number): number {
	let res = 0

	for (let i = 0; i < nums.length; i++) {
		let oddCount = 0
		for (let j = i; j < nums.length; j++) {
			if (nums[j] % 2) {
				oddCount++
			}

			if (oddCount === k) {
				res++
			}
		}
	}

	return res
}

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3))
