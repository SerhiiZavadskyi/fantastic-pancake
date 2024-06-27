function findCenter(edges: number[][]): number {
	const count = new Map()
	let maxCount = 0

	for (const [u, v] of edges) {
		count.set(u, (count.get(u) ?? 0) + 1)
		count.set(v, (count.get(v) ?? 0) + 1)

		maxCount = Math.max(count.get(v), count.get(u), maxCount)
	}

	for (const [n, cnt] of count) {
		if (cnt === maxCount) {
			return n
		}
	}

	return -1
}

function findCenter2(edges: number[][]): number {
	const set = new Set()

	for (const [u, v] of edges) {
		if (set.has(u)) {
			return u
		}

		if (set.has(v)) {
			return v
		}
		set.add(u)
		set.add(v)
	}

	return -1
}

console.log(
	findCenter2([
		[1, 2],
		[2, 3],
		[4, 2],
	])
)
