function firstMissingPositive(nums: number[]): number {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] < 0) {
			nums[i] = 0
		}
	}

	for (let i = 0; i < nums.length; i++) {
		const n = Math.abs(nums[i])

		if (nums[n - 1] > 0) {
			nums[n - 1] *= -1
		}

		if (nums[n - 1] === 0) {
			nums[n - 1] = -1 * (nums.length + 1)
		}
	}

	for (let i = 1; i < nums.length + 1; i++) {
		if (nums[i - 1] >= 0) {
			return i
		}
	}

	return nums.length + 1
}

function firstMissingPositive2(nums: number[]): number {
	const set = new Set(nums)

	let smallestPositive = 1

	for (const _ of nums) {
		if (set.has(smallestPositive)) {
			smallestPositive++
		}
	}

	return smallestPositive
}

//nlog(n) 😒
function firstMissingPositive3(nums: number[]): number {
	nums.sort((a, b) => a - b)

	let smallestPositive = 1

	for (const n of nums) {
		if (n === smallestPositive) {
			smallestPositive++
		}
	}

	return smallestPositive
}

console.log(firstMissingPositive([7, 8, 9, 11, 12]))
console.log(firstMissingPositive([3, 4, -1, 1]))
console.log(firstMissingPositive([1]))
