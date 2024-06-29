function getAncestors(n: number, edges: number[][]): number[][] {
	let result: Set<number>[] = Array(n).fill(new Set())
	let adjacencies: Map<number, Set<number>> = new Map()
	let seen: Set<number> = new Set()

	for (const [from, to] of edges) {
		const adjacentNodes = adjacencies.get(to) || new Set()
		adjacencies.set(to, adjacentNodes.add(from))
	}

	const dfs = (node: number, ancestors: Set<number>): Set<number> => {
		if (seen.has(node)) {
			return result[node]
		}

		seen.add(node)
		const allAncestors = new Set(ancestors)

		for (const ancestor of ancestors) {
			const previousGeneration = dfs(ancestor, adjacencies.get(ancestor) || new Set())

			result[ancestor] = previousGeneration

			for (const member of previousGeneration) {
				allAncestors.add(member)
			}
		}

		return allAncestors
	}

	for (const [node, adjacentNodes] of adjacencies.entries()) {
		result[node] = dfs(node, adjacentNodes)
	}

	return result.map((set) => Array.from(set).sort((a, b) => a - b))
}

console.log(
	getAncestors(8, [
		[0, 3],
		[0, 4],
		[1, 3],
		[2, 4],
		[2, 7],
		[3, 5],
		[3, 6],
		[3, 7],
		[4, 6],
	])
)
