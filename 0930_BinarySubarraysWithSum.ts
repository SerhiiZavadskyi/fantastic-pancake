function numSubarraysWithSum(nums: number[], goal: number): number {
	return helper(nums, goal) - helper(nums, goal - 1)
}

function helper(nums: number[], goal: number): number {
	if (goal < 0) {
		return 0
	}
	let res = 0,
		l = 0,
		sum = 0

	for (let r = 0; r < nums.length; r++) {
		sum += nums[r]

		while (sum > goal) {
			sum -= nums[l]
			l++
		}

		res += r - l + 1
	}

	return res
}

//brute-force O(n^2) 👎
function numSubarraysWithSum2(nums: number[], goal: number): number {
	let count = 0

	for (let i = 0; i < nums.length; i++) {
		let sum = 0
		for (let j = i; j < nums.length; j++) {
			sum += nums[j]
			if (sum === goal) {
				count++
			}
		}
	}

	return count
}

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2))
console.log(numSubarraysWithSum2([1, 0, 1, 0, 1], 2))
