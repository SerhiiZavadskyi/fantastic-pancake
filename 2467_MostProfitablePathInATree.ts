function mostProfitablePath(edges: number[][], bob: number, amount: number[]): number {
	const n = amount.length;
	const adj: number[][] = Array.from({ length: n }, () => []);
	// Use n as the initial “infinite” distance.
	const bobDist: number[] = new Array(n).fill(n);

	// Build the undirected tree.
	for (const [u, v] of edges) {
		adj[u].push(v);
		adj[v].push(u);
	}

	function dfs(node: number, parent: number, depth: number): number {
		if (node === bob) {
			bobDist[node] = 0;
		}

		let bestChildProfit = -Infinity;
		let profitHere = 0;

		for (let child of adj[node]) {
			if (child === parent) continue;
			const childProfit = dfs(child, node, depth + 1);
			bestChildProfit = childProfit > bestChildProfit ? childProfit : bestChildProfit;
			bobDist[node] = Math.min(bobDist[node], bobDist[child] + 1);
		}

		if (depth < bobDist[node]) {
			profitHere += amount[node];
		} else if (depth === bobDist[node]) {
			profitHere += amount[node] >> 1; // equivalent to Math.floor(amount[node]/2)
		}

		return bestChildProfit === -Infinity ? profitHere : profitHere + bestChildProfit;
	}

	return dfs(0, -1, 0);
}

console.log(
	mostProfitablePath(
		[
			[0, 1],
			[1, 2],
			[1, 3],
			[3, 4],
		],
		3,
		[-2, 4, 2, -4, 6]
	)
);
