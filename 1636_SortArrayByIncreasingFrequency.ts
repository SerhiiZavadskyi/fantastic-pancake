function frequencySort(nums: number[]): number[] {
	const frequency = new Map<number, number>()

	nums.forEach((n) => frequency.set(n, (frequency.get(n) ?? 0) + 1))

	const sortedFreq = [...frequency].sort((a, b) => {
		if (a[1] === b[1]) {
			return b[0] - a[0]
		} else {
			return a[1] - b[1]
		}
	})
	const res: number[] = []

	for (const [n, cnt] of sortedFreq) {
		for (let i = 0; i < cnt; i++) {
			res.push(n)
		}
	}

	return res
}

function frequencySort2(nums: number[]): number[] {
	const frequency = new Map<number, number>()

	nums.forEach((n) => frequency.set(n, (frequency.get(n) ?? 0) + 1))
	nums.sort((a, b) => (frequency.get(a) === frequency.get(b) ? b - a : frequency.get(a)! - frequency.get(b)!))

	return nums
}

console.log(frequencySort2([-1, 1, -6, 4, 5, -6, 1, 4, 1]))
