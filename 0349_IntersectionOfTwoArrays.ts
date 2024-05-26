function intersection(nums1: number[], nums2: number[]): number[] {
	const set = new Set(nums1)
	const res = new Set<number>()

	for (const n of nums2) {
		if (set.has(n)) res.add(n)
	}

	return [...res]
}

function intersection2(nums1: number[], nums2: number[]): number[] {
	nums1.sort((a, b) => a - b)
	nums2.sort((a, b) => a - b)
	let i = 0
	let j = 0
	const res: number[] = []

	while (i < nums1.length && j < nums2.length) {
		if (nums1[i] === nums2[j] && !res.includes(nums1[i])) {
			res.push(nums1[i])
		}

		if (nums1[i] > nums2[j]) {
			j++
		} else {
			i++
		}
	}

	return res
}

function intersection3(nums1: number[], nums2: number[]): number[] {
	return [...new Set(nums1)].filter((n) => new Set(nums2).has(n))
}

console.log(intersection3([4, 2, 2], [9, 4, 9, 2, 2, 4]))
