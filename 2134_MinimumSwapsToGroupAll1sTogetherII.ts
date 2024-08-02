function minSwaps(nums: number[]): number {
	let n = nums.length
	let totalOnes = 0

	for (let num of nums) {
		if (num === 1) {
			totalOnes++
		}
	}

	if (totalOnes === 0 || totalOnes === n) {
		return 0
	}

	let maxOnesInWindow = 0
	let currentOnesInWindow = 0

	for (let i = 0; i < totalOnes; i++) {
		if (nums[i] === 1) {
			currentOnesInWindow++
		}
	}

	maxOnesInWindow = currentOnesInWindow

	for (let i = 1; i < n; i++) {
		if (nums[i - 1] === 1) {
			currentOnesInWindow--
		}
		if (nums[(i + totalOnes - 1) % n] === 1) {
			currentOnesInWindow++
		}
		maxOnesInWindow = Math.max(maxOnesInWindow, currentOnesInWindow)
	}

	return totalOnes - maxOnesInWindow
}
console.log(minSwaps([0, 1, 1, 1, 0, 0, 1, 1, 0]))
