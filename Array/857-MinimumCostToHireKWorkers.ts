function mincostToHireWorkers(quality: number[], wage: number[], k: number): number {
	let res = Infinity
	const pairs: number[][] = []

	for (let i = 0; i < quality.length; i++) {
		pairs.push([wage[i] / quality[i], quality[i]])
	}

	pairs.sort((a, b) => a[0] - b[0])

	const maxHeap: number[] = []
	let totalQuality = 0

	for (const [rate, q] of pairs) {
		totalQuality += q
		maxHeap.push(q)

		if (maxHeap.length > k) {
			maxHeap.sort((a, b) => a - b)
			totalQuality -= maxHeap.pop()!

			res = Math.min(res, totalQuality * rate)
		}

		if (maxHeap.length === k) {
			res = Math.min(res, totalQuality * rate)
		}
	}

	return res
}
console.log(mincostToHireWorkers([3, 1, 10, 10, 1], [4, 8, 2, 2, 7], 3))
