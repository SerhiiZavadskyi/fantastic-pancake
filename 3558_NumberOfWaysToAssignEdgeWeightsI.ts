function assignEdgeWeights(edges: number[][]): number {
	const MOD = BigInt(10 ** 9 + 7);
	const n = edges.length + 1;
	const adj: number[][] = Array.from({ length: n + 1 }, (): number[] => []);

	for (const [u, v] of edges) {
		adj[u].push(v);
		adj[v].push(u);
	}

	const dfs = (x: number, f: number): number => {
		let maxDepth = 0;

		for (const y of adj[x]) {
			if (y === f) {
				continue;
			}

			maxDepth = Math.max(maxDepth, dfs(y, x) + 1);
		}

		return maxDepth;
	};

	const maxDepth = dfs(1, 0);

	const pow = (base: bigint, exp: number): number => {
		let res = 1n;

		base = BigInt(base) % MOD;

		let e = BigInt(exp);

		while (e > 0n) {
			if (e % 2n === 1n) {
				res = (res * base) % MOD;
			}

			base = (base * base) % MOD;

			e /= 2n;
		}

		return Number(res);
	};

	return pow(2n, maxDepth - 1);
}

console.log(
	assignEdgeWeights([
		[1, 2],
		[1, 3],
		[3, 4],
		[3, 5],
	]),
);
