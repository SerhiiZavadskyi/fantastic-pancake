function findPaths(
	m: number,
	n: number,
	maxMove: number,
	startRow: number,
	startColumn: number
): number {
	const MOD = 10 ** 9 + 7;
	const cache = new Map();

	function dfs(row: number, col: number, moves: number): number {
		if (row < 0 || row === m || col < 0 || col === n) {
			return 1;
		}

		if (moves === 0) {
			return 0;
		}

		const hashKey = `${row}-${col}-${moves}`;

		if (cache.has(hashKey)) {
			return cache.get(hashKey);
		}

		cache.set(
			hashKey,
			(dfs(row + 1, col, moves - 1) +
				(dfs(row - 1, col, moves - 1) % MOD) +
				dfs(row, col + 1, moves - 1) +
				(dfs(row, col - 1, moves - 1) % MOD)) %
				MOD
		);

		return cache.get(hashKey);
	}

	return dfs(startRow, startColumn, maxMove);
}

function findPathsDp(
	m: number,
	n: number,
	maxMove: number,
	startRow: number,
	startColumn: number
): number {
	const MOD = 10 ** 9 + 7;
	let grid: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0));

	for (let i = 1; i < maxMove + 1; i++) {
		const temp: number[][] = new Array(m)
			.fill(0)
			.map(() => new Array(n).fill(0));

		for (let j = 0; j < m; j++) {
			for (let k = 0; k < n; k++) {
				if (j + 1 === m) {
					temp[j][k] = (1 + temp[j][k]) % MOD;
				} else {
					temp[j][k] = (grid[j + 1][k] + temp[j][k]) % MOD;
				}

				if (j - 1 < 0) {
					temp[j][k] = (1 + temp[j][k]) % MOD;
				} else {
					temp[j][k] = (grid[j - 1][k] + temp[j][k]) % MOD;
				}

				if (k + 1 === n) {
					temp[j][k] = (1 + temp[j][k]) % MOD;
				} else {
					temp[j][k] = (grid[j][k + 1] + temp[j][k]) % MOD;
				}

				if (k - 1 < 0) {
					temp[j][k] = (1 + temp[j][k]) % MOD;
				} else {
					temp[j][k] = (grid[j][k - 1] + temp[j][k]) % MOD;
				}
			}
		}
		grid = temp;
	}

	return grid[startRow][startColumn];
}

console.log(findPathsDp(1, 3, 3, 0, 1));
