function dijkstra(n: number, edges: number[][], start: number): number[] {
	const dist = Array(n).fill(Infinity)
	const nodeDist: { node: number; dist: number }[] = []

	dist[start] = 0
	nodeDist.push({ node: start, dist: 0 })

	while (nodeDist.length > 0) {
		nodeDist.sort((a, b) => a.dist - b.dist)
		const { node, dist: currDist } = nodeDist.shift()!

		if (currDist > dist[node]) continue

		for (const [from, to, weight] of edges) {
			if (from === node || to === node) {
				const neighbor = from === node ? to : from
				const newDist = currDist + weight
				if (newDist < dist[neighbor]) {
					dist[neighbor] = newDist
					nodeDist.push({ node: neighbor, dist: newDist })
				}
			}
		}
	}

	return dist
}

function findTheCity(n: number, edges: number[][], distanceThreshold: number): number {
	let minCity = -1
	let minVisits = Infinity

	for (let i = 0; i < n; i++) {
		const distances = dijkstra(n, edges, i)

		const visitsCount = distances.filter((d) => d <= distanceThreshold).length - 1 // -1 para excluir la ciudad misma

		if (visitsCount < minVisits || (visitsCount === minVisits && i > minCity)) {
			minCity = i
			minVisits = visitsCount
		}
	}

	return minCity
}

console.log(
	findTheCity(
		4,
		[
			[0, 1, 3],
			[1, 2, 1],
			[1, 3, 4],
			[2, 3, 1],
		],
		4
	)
)
