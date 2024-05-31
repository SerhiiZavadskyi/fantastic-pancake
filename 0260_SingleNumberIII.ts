function singleNumber(nums: number[]): number[] {
	let xorCount = 0

	for (const n of nums) {
		xorCount ^= n
	}

	let diff = 1

	while (!(xorCount & diff)) {
		diff <<= 1
	}

	let x = 0,
		y = 0

	for (const n of nums) {
		if (diff & n) {
			x ^= n
		} else {
			y ^= n
		}
	}

	return [x, y]
}

function singleNumber2(nums: number[]): number[] {
	const count = new Map()

	for (const n of nums) {
		count.set(n, (count.get(n) ?? 0) + 1)
	}

	const res: number[] = []

	for (const [n, cnt] of count) {
		if (cnt === 1) {
			res.push(n)
		}
	}

	return res
}

console.log(singleNumber([1, 2, 1, 3, 2, 5]))
