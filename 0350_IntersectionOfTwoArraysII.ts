function intersect2(nums1: number[], nums2: number[]): number[] {
	nums1.sort((a, b) => a - b)
	nums2.sort((a, b) => a - b)

	let x: number = 0
	let y: number = 0
	const res: number[] = []

	while (x < nums1.length && y < nums2.length) {
		if (nums1[x] < nums2[y]) {
			x++
		} else if (nums1[x] > nums2[y]) {
			y++
		} else {
			res.push(nums1[x])
			x++
			y++
		}
	}

	return res
}

function intersect(nums1: number[], nums2: number[]): number[] {
	const count = new Map()
	const res: number[] = []

	nums2.forEach((n) => count.set(n, (count.get(n) ?? 0) + 1))

	for (const n of nums1) {
		if (count.get(n) > 0) {
			res.push(n)
			count.set(n, count.get(n) - 1)
		}
	}

	return res
}
console.log(intersect([1, 2, 2, 1], [2, 2, 2]))
