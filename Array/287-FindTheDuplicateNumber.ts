function findDuplicate(nums: number[]): number {
	const cache = new Map()

	for (let num of nums) {
		if (cache.has(num)) {
			return num
		}

		cache.set(num, num)
	}

	return -1
}

function findDuplicate2(nums: number[]): number {
	const set = new Set()

	for (const n of nums) {
		if (set.has(n)) {
			return n
		}

		set.add(n)
	}

	return -1
}

function findDuplicate3(nums: number[]): number {
	let slow = nums[0]
	let fast = nums[1]

	do {
		slow = nums[slow]
		fast = nums[nums[fast]]
	} while (slow != fast)

	slow = nums[0]

	while (slow !== fast) {
		slow = nums[slow]
		fast = nums[fast]
	}

	return slow
}

function findDuplicate4(nums: number[]): number {
	const arr = new Array(nums.length).fill(0)

	for (const n of nums) {
		if (arr[n - 1] > 0) {
			return n
		}

		arr[n - 1] = n
	}

	return -1
}

console.log(findDuplicate4([1, 3, 4, 2, 2]))
