function removeStones(stones: number[][]): number {
	const parent: number[] = new Array(stones.length).fill(0).map((_, i) => i)
	const rank: number[] = new Array(stones.length).fill(0)

	function findParent(x: number): number {
		if (x === parent[x]) {
			return x
		}

		parent[x] = findParent(parent[x])

		return parent[x]
	}

	function union(x: number, y: number): number {
		let parentX = findParent(x)
		let parentY = findParent(y)

		if (parentX === parentY) {
			return 0
		}

		if (rank[parentX] < rank[parentY]) {
			const temp = parentX
			parentX = parentY
			parentY = temp
		}

		rank[parentX] += rank[parentY]
		parent[parentY] = parent[x]

		return 1
	}

	const X: Record<number, number> = {}
	const Y: Record<number, number> = {}
	let count = 0

	for (let i = 0; i < stones.length; i++) {
		const [x, y] = stones[i]

		if (X[x] !== undefined) {
			count += union(i, X[x])
		} else {
			X[x] = i
		}

		if (Y[y] !== undefined) {
			count += union(i, Y[y])
		} else {
			Y[y] = i
		}
	}

	return count
}

console.log(
	removeStones([
		[0, 0],
		[0, 1],
		[1, 0],
		[1, 2],
		[2, 1],
		[2, 2],
	])
)
