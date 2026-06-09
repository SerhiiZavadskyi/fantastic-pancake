function countPaths(n: number, roads: number[][]): number {
	let res = 0;
	const adj = new Map<number, number[]>();

	for (const [v, u, t] of roads) {
		if (adj.has(v)) {
			adj.get(v)?.push(u);
		} else {
			adj.set(v, [u]);
		}

		if (adj.has(u)) {
			adj.get(u)?.push(v);
		} else {
			adj.set(u, [v]);
		}
	}
	console.log(adj);

	return res;
}

console.log(
	countPaths(7, [
		[0, 6, 7],
		[0, 1, 2],
		[1, 2, 3],
		[1, 3, 3],
		[6, 3, 3],
		[3, 5, 1],
		[6, 5, 1],
		[2, 5, 1],
		[0, 4, 5],
		[4, 6, 2],
	])
);
