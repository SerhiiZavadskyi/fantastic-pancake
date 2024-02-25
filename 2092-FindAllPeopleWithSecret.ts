function findAllPeople(n: number, meetings: number[][], firstPerson: number): number[] {
	const secrets = new Set([0, firstPerson]);

	const timeMap: Record<number, Record<number, number[]>> = {};

	for (const [src, dst, t] of meetings) {
		if (!timeMap[t]) timeMap[t] = {};
		if (!timeMap[t][src]) timeMap[t][src] = [];
		if (!timeMap[t][dst]) timeMap[t][dst] = [];

		timeMap[t][src].push(dst);
		timeMap[t][dst].push(src);
	}

	function dfs(src: number, visit: Set<number>, adj: Record<string, number[]>) {
		if (visit.has(src)) {
			return;
		}

		visit.add(src);
		secrets.add(src);

		for (const neighbor of adj[src]) {
			dfs(neighbor, visit, adj);
		}
	}

	for (const t of Object.keys(timeMap)) {
		const visit = new Set<number>();

		for (const src in timeMap[t]) {
			if (secrets.has(+src)) {
				dfs(+src, visit, timeMap[t]);
			}
		}
	}

	return [...secrets.values()];
}

console.log(
	findAllPeople(
		6,
		[
			[1, 2, 5],
			[2, 3, 8],
			[1, 5, 10],
		],
		1
	)
);
