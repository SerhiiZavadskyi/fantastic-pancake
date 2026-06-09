function numTilePossibilities(tiles: string): number {
	const count = new Map();

	for (const t of tiles) {
		count.set(t, (count.get(t) ?? 0) + 1);
	}

	const backtrack = (): number => {
		let res = 0;

		for (const [t, cnt] of count) {
			if (cnt > 0) {
				count.set(t, count.get(t) - 1);
				res += backtrack() + 1;
				count.set(t, count.get(t) + 1);
			}
		}

		return res;
	};

	return backtrack();
}

console.log(numTilePossibilities("AAB"));
