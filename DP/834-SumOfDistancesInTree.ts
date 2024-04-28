function sumOfDistancesInTree(n: number, edges: number[][]): number[] {
	if (!edges.length) {
		return [0]
	}
	const adjList = new Map<number, number[]>()

	for (const [a, b] of edges) {
		if (adjList.has(a)) {
			adjList.get(a)?.push(b)
		} else {
			adjList.set(a, [b])
		}

		if (adjList.has(b)) {
			adjList.get(b)?.push(a)
		} else {
			adjList.set(b, [a])
		}
	}

	const answer = new Array(n).fill(0)
	const count = new Array(n).fill(1)
	let root = 0

	function dfs(curr: number, parent: number, depth: number): number {
		let res = 1

		for (const child of adjList.get(curr)!) {
			if (child !== parent) {
				res += dfs(child, curr, depth + 1)
				root += depth + 1
			}
		}
		count[curr] = res

		return res
	}
	dfs(0, -1, 0)

	function dfs2(curr: number, parent: number, ans: number) {
		answer[curr] = ans

		for (const child of adjList.get(curr)!) {
			if (child !== parent) {
				dfs2(child, curr, ans + (n - count[child]) - count[child])
			}
		}
	}
	dfs2(0, -1, root)

	return answer
}
