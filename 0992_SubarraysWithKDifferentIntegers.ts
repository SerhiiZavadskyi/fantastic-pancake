function subarraysWithKDistinct(nums: number[], k: number): number {
	let res = 0
	let l1 = 0
	let l2 = 0
	const map = new Map()

	for (let r = 0; r < nums.length; r++) {
		map.set(nums[r], (map.get(nums[r]) ?? 0) + 1)

		while (map.size > k) {
			map.set(nums[l2], map.get(nums[l2]) - 1)

			if (map.get(nums[l2]) === 0) {
				map.delete(nums[l2])
			}

			l2++
			l1 = l2
		}

		while (map.get(nums[l2]) > 1) {
			map.set(nums[l2], map.get(nums[l2]) - 1)
			l2++
		}

		if (map.size === k) {
			res += l2 - l1 + 1
		}
	}

	return res
}

console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2)) //7
