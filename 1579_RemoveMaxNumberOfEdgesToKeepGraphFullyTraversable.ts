import { UnionFind } from "./helpers/UnionFind"

function maxNumEdgesToRemove(n: number, edges: number[][]): number {
	const alice = new UnionFind(n)
	const bob = new UnionFind(n)
	let countEdges = 0

	for (const [t, src, dst] of edges) {
		if (t === 3) {
			countEdges += (alice.union(src, dst) || 0) | (bob.union(src, dst) || 0)
		}
	}

	for (const [t, src, dst] of edges) {
		if (t === 1) {
			countEdges += alice.union(src, dst) || 0
		}
		if (t === 2) {
			countEdges += bob.union(src, dst) || 0
		}
	}

	if (bob.isConnected() && alice.isConnected()) {
		return edges.length - countEdges
	}

	return -1
}

console.log(
	maxNumEdgesToRemove(4, [
		[3, 1, 2],
		[3, 2, 3],
		[1, 1, 3],
		[1, 2, 4],
		[1, 1, 2],
		[2, 3, 4],
	])
)
