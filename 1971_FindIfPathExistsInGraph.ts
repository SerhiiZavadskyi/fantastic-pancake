function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
	const graph = new Map<number, number[]>()
	const visited = new Set<number>()

	for (const [u, v] of edges) {
		if (graph.has(u)) {
			graph.get(u)?.push(v)
		} else {
			graph.set(u, [v])
		}
		if (graph.has(v)) {
			graph.get(v)?.push(u)
		} else {
			graph.set(v, [u])
		}
	}

	function dfs(src: number): boolean {
		if (src === destination) {
			return true
		}

		visited.add(src)

		for (const v of graph.get(src)!) {
			if (!visited.has(v) && dfs(v)) {
				return true
			}
		}

		return false
	}

	return dfs(source)
}

console.log(validPath(5, [[0, 4]], 0, 4))
