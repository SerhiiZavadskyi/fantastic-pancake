function maxProbability(
	n: number,
	edges: number[][],
	succProb: number[],
	start_node: number,
	end_node: number
): number {
	const probTable = new Array<number>(n).fill(0.0)
	probTable[start_node] = 1.0

	for (let i = 0; i < n; ++i) {
		let updated = false
		for (let j = 0; j < edges.length; ++j) {
			const [u, v] = edges[j]
			const prob = succProb[j]

			if (probTable[u] * prob > probTable[v]) {
				probTable[v] = probTable[u] * prob
				updated = true
			}

			if (probTable[v] * prob > probTable[u]) {
				probTable[u] = probTable[v] * prob
				updated = true
			}
		}
		if (!updated) break
	}
	return probTable[end_node]
}
