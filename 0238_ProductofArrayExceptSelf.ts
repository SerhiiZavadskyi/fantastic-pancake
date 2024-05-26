function productExceptSelf(nums: number[]): number[] {
	const res = new Array(nums.length).fill(1)
	let prefix = 1
	let postfix = 1

	for (let i = 0; i < nums.length; i++) {
		res[i] = prefix
		prefix *= nums[i]
	}

	for (let i = nums.length - 1; i >= 0; i--) {
		res[i] *= postfix
		postfix *= nums[i]
	}

	return res
}

function productExceptSelf2(nums: number[]): number[] {
	const res = new Array(nums.length).fill(1)
	const last = nums.length - 1
	let l = 1
	let r = 1

	for (let i = 0; i < last; i++) {
		l *= nums[i]
		r *= nums[last - i]
		res[i + 1] *= l
		res[last - i - 1] *= r
	}

	return res
}

console.log(productExceptSelf2([-1, 1, 0, -3, 3]))
