function maxFrequencyElements(nums: number[]): number {
	const count = new Map()

	for (const n of nums) {
		count.set(n, (count.get(n) ?? 0) + 1)
	}

	let res = 0
	let max = Math.max(...count.values())

	for (const [n, c] of count) {
		if (c === max) res += c
	}

	return res
}

console.log(maxFrequencyElements([1, 2, 2, 3, 1, 4]))
console.log(maxFrequencyElements([1, 2, 3, 4, 5]))
