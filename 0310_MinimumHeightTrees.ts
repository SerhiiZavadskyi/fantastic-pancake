function findMinHeightTrees(n: number, edges: number[][]): number[] {
	if (!edges.length) {
		return [0]
	}

	const adj = new Map()

	for (const [n1, n2] of edges) {
		if (adj.has(n1)) {
			adj.get(n1).push(n2)
		} else {
			adj.set(n1, [n2])
		}

		if (adj.has(n2)) {
			adj.get(n2).push(n1)
		} else {
			adj.set(n2, [n1])
		}
	}

	const edgeCount = new Map()
	const leaves: number[] = []

	for (const [src, neighbors] of adj) {
		if (neighbors.length === 1) {
			leaves.push(src)
		}

		edgeCount.set(src, neighbors.length)
	}
	let front = 0

	while (n > 2) {
		const node = leaves.length - front
		n -= node

		for (let i = 0; i < node; i++) {
			const currentElm = leaves[front++]
			for (const nei of adj.get(currentElm)) {
				edgeCount.set(nei, edgeCount.get(nei) - 1)

				if (edgeCount.get(nei) === 1) {
					leaves.push(nei)
				}
			}
		}
	}

	return leaves.slice(front)
}

console.log(
	findMinHeightTrees(4, [
		[1, 0],
		[1, 2],
		[1, 3],
	])
)
