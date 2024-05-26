function findDuplicates(nums: number[]): number[] {
	const res: number[] = []

	for (const num of nums) {
		const n = Math.abs(num)

		if (nums[n - 1] < 0) {
			res.push(n)
		}

		nums[n - 1] *= -1
	}

	return res
}

function findDuplicates2(nums: number[]): number[] {
	const set = new Set()
	const res: number[] = []

	for (const n of nums) {
		if (set.has(n)) {
			res.push(n)
		} else {
			set.add(n)
		}
	}

	return res
}

function findDuplicates3(nums: number[]): number[] {
	const map = new Map()

	for (const n of nums) {
		map.set(n, (map.get(n) ?? 0) + 1)
	}

	const res: number[] = []
	for (const [key, val] of map) {
		if (val === 2) {
			res.push(key)
		}
	}

	return res
}

function findDuplicates4(nums: number[]): number[] {
	const res: number[] = []
	nums.sort((a, b) => a - b) //nlog(n) 😒

	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] === nums[i + 1]) {
			res.push(nums[i])
		}
	}

	return res
}

function findDuplicates5(nums: number[]): number[] {
	const arr = new Array(nums.length).fill(0)
	const res: number[] = []

	for (const n of nums) {
		if (arr[n - 1] > 0) {
			res.push(n)
		}
		arr[n - 1] = n
	}

	return res
}

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]))
