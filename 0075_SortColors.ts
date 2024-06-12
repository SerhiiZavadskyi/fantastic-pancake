/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
	const count = new Array(3).fill(0)

	nums.forEach((n) => count[n]++)

	let idx = 0
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < count[i]; j++) {
			nums[idx] = i
			idx++
		}
	}
}

sortColors([2, 0, 2, 1, 1, 0])
