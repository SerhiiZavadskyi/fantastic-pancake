class LCA {
	n: number = 0;
	m: number = 0;
	adj: number[][] = [];
	d: number[] = [];
	f: number[][] = [];

	constructor(edges: number[][]) {
		this.n = edges.length + 2;
		this.m = Math.floor(Math.log2(this.n)) + 2;
		this.adj = Array.from({ length: this.n }, (): number[] => []);
		this.d = new Array(this.n).fill(0);
		this.f = Array.from({ length: this.n }, (): number[] => new Array(this.m).fill(0));

		for (const [u, v] of edges) {
			this.adj[u].push(v);
			this.adj[v].push(u);
		}

		this.dfs(1, 0);

		for (let i = 1; i < this.m; i++) {
			for (let x = 1; x < this.n; x++) {
				this.f[x][i] = this.f[this.f[x][i - 1]][i - 1];
			}
		}
	}

	dfs(x: number, fa: number) {
		this.f[x][0] = fa;
		for (const y of this.adj[x]) {
			if (y === fa) {
				continue;
			}
			this.d[y] = this.d[x] + 1;
			this.dfs(y, x);
		}
	}

	getLca(u: number, v: number) {
		if (this.d[u] < this.d[v]) {
			[u, v] = [v, u];
		}

		for (let i = this.m - 1; i >= 0; i--) {
			if (this.d[this.f[u][i]] >= this.d[v]) {
				u = this.f[u][i];
			}
		}

		if (u === v) {
			return u;
		}

		for (let i = this.m - 1; i >= 0; i--) {
			if (this.f[u][i] !== this.f[v][i]) {
				u = this.f[u][i];
				v = this.f[v][i];
			}
		}

		return this.f[u][0];
	}
}

function assignEdgeWeights(edges: number[][], queries: number[][]): number[] {
	const lca = new LCA(edges);
	const MOD = BigInt(10 ** 9 + 7);
	const powers = new Array(lca.n + 1).fill(1n);

	for (let i = 1; i < lca.n; i++) {
		powers[i] = (powers[i - 1] * 2n) % MOD;
	}

	const res: number[] = [];

	for (const [u, v] of queries) {
		const anc = lca.getLca(u, v);
		const dist = lca.d[u] + lca.d[v] - 2 * lca.d[anc];

		res.push(dist === 0 ? 0 : Number(powers[dist - 1]));
	}

	return res;
}
console.log(
	assignEdgeWeights(
		[[1, 2]],
		[
			[1, 1],
			[1, 2],
		],
	),
);
