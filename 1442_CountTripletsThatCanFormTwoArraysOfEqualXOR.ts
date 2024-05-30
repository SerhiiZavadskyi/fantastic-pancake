function countTriplets(arr: number[]): number {
	let count = 0

	let prefix = 0

	const prevCount = new Map()
	prevCount.set(0, 1)
	const prevIndexSum = new Map()

	for (let i = 0; i < arr.length; i++) {
		prefix ^= arr[i]

		if (prevCount.has(prefix)) {
			count += i * prevCount.get(prefix) - (prevIndexSum.get(prefix) ?? 0)
		}

		prevCount.set(prefix, (prevCount.get(prefix) ?? 0) + 1)
		prevIndexSum.set(prefix, (prevIndexSum.get(prefix) ?? 0) + i + 1)
	}

	return count
}

console.log(countTriplets([2, 3, 1, 6, 7]))
