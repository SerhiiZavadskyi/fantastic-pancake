function sortJumbled(mapping: number[], nums: number[]): number[] {
	const pairs: number[][] = []

	nums.forEach((num, i) => {
		let mapped = ""
		const n = num.toString()

		for (const digit of n) {
			mapped += mapping[+digit]
		}

		pairs.push([Number(mapped), i])
	})

	pairs.sort((a, b) => a[0] - b[0])

	return pairs.map((p) => nums[p[1]])
}

console.log(sortJumbled([8, 9, 4, 0, 2, 1, 3, 5, 7, 6], [991, 338, 38]))
