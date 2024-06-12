/**
 Do not return anything, modify nums in-place instead.
 */
//Bucket sort
function sortColors(nums: number[]): void {
	let l = 0,
		r = nums.length - 1,
		i = 0

	const swap = (i: number, j: number) => {
		const temp = nums[i]
		nums[i] = nums[j]
		nums[j] = temp
	}

	while (i <= r) {
		if (nums[i] === 0) {
			swap(l, i)
			l++
		} else if (nums[i] === 2) {
			swap(i, r)
			r--
			i--
		}
		i++
	}
	console.log(nums)
}

//counting sort
function sortColors2(nums: number[]): void {
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
