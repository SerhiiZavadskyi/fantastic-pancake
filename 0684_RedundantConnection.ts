function findRedundantConnection(edges: number[][]): number[] {
	const parent: number[] = [];

	for (let i = 0; i < edges.length; i++) {
		parent[i] = i;
	}
	function find(node: number): number {
		if (parent[node] !== node) {
			parent[node] = find(parent[node]);
		}

		return parent[node];
	}

	function union(node1: number, node2: number): boolean {
		const root1 = find(node1);
		const root2 = find(node2);

		if (root1 === root2) {
			return false;
		}

		parent[root2] = root1;
		return true;
	}

	for (const [node1, node2] of edges) {
		if (!union(node1, node2)) {
			return [node1, node2];
		}
	}

	return [];
}

console.log(
	findRedundantConnection([
		[1, 2],
		[1, 3],
		[2, 3],
	])
);
