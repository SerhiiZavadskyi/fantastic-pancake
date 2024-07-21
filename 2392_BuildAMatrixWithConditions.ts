function buildMatrix(k: number, rowConditions: number[][], colConditions: number[][]): number[][] {
	const colGraph: number[][] = Array.from({ length: k + 1 }, () => [])
	const rowGraph: number[][] = Array.from({ length: k + 1 }, () => [])

	for (const [u, v] of rowConditions) {
		rowGraph[u].push(v)
	}
	for (const [u, v] of colConditions) {
		colGraph[u].push(v)
	}

	const topoSort = (graph: number[][]) => {
		const inDegree = Array(k + 1).fill(0)
		for (const u of graph) {
			for (const v of u) {
				inDegree[v]++
			}
		}
		const queue: number[] = []
		for (let i = 1; i <= k; i++) {
			if (inDegree[i] === 0) queue.push(i)
		}
		const order: number[] = []
		while (queue.length) {
			const node = queue.shift()!
			order.push(node)
			for (const v of graph[node]) {
				if (--inDegree[v] === 0) queue.push(v)
			}
		}
		return order.length === k ? order : []
	}

	const rowOrder = topoSort(rowGraph)
	const colOrder = topoSort(colGraph)

	if (!rowOrder.length || !colOrder.length) return []

	const rowMap: Record<number, number> = rowOrder.reduce((acc: Record<number, number>, num: number, i: number) => {
		acc[num] = i
		return acc
	}, {})

	const colMap: Record<number, number> = colOrder.reduce((acc: Record<number, number>, num: number, i: number) => {
		acc[num] = i
		return acc
	}, {})

	const result = Array.from({ length: k }, () => Array(k).fill(0))
	for (let i = 1; i <= k; i++) {
		result[rowMap[i]][colMap[i]] = i
	}

	return result
}
console.log(
	buildMatrix(
		3,
		[
			[1, 2],
			[3, 2],
		],
		[
			[2, 1],
			[3, 2],
		]
	)
)
