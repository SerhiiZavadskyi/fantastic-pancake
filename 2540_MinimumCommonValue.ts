function getCommon(nums1: number[], nums2: number[]): number {
	const set = new Set(nums1)

	for (const n2 of nums2) {
		if (set.has(n2)) {
			return n2
		}
	}

	return -1
}

function getCommon2(nums1: number[], nums2: number[]): number {
	let i = 0
	let j = 0

	while (i < nums1.length && j < nums2.length) {
		if (nums1[i] === nums2[j]) {
			return nums1[i]
		} else if (nums1[i] > nums2[j]) {
			j++
		} else {
			i++
		}
	}

	return -1
}

// Time Limit Exceeded 👎
function getCommon3(nums1: number[], nums2: number[]): number {
	for (const n1 of nums1) {
		for (const n2 of nums2) {
			if (n1 === n2) {
				return n1
			}
		}
	}

	return -1
}

console.log(getCommon([1, 2, 3, 6], [2, 3, 4, 5]))
console.log(getCommon2([1, 2, 3, 6], [2, 3, 4, 5]))
