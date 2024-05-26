function cherryPickup(grid: number[][]): number {
	const ROWS = grid.length;
	const COLS = grid[0].length;

	let dp = Array.from({ length: COLS }, () => Array.from({ length: COLS }, () => 0));

	for (let r = ROWS - 1; r >= 0; r--) {
		const currDp = Array.from({ length: COLS }, () => Array.from({ length: COLS }, () => 0));

		for (let c1 = 0; c1 < COLS - 1; c1++) {
			for (let c2 = c1 + 1; c2 < COLS; c2++) {
				let maxCherries = 0;
				let cherries = grid[r][c1] + grid[r][c2];

				for (const c1d of [-1, 0, 1]) {
					for (const c2d of [-1, 0, 1]) {
						const nc1 = c1 + c1d;
						const nc2 = c2 + c2d;

						if (nc1 < 0 || nc2 === COLS) continue;

						maxCherries = Math.max(maxCherries, cherries + dp[nc1][nc2]);
					}
				}
				currDp[c1][c2] = maxCherries;
			}
		}

		dp = currDp;
	}

	return dp[0][COLS - 1];
}
console.log(
	cherryPickup([
		[1, 0, 0, 0, 0, 0, 1],
		[2, 0, 0, 0, 0, 3, 0],
		[2, 0, 9, 0, 0, 0, 0],
		[0, 3, 0, 5, 4, 0, 0],
		[1, 0, 2, 3, 0, 0, 6],
	])
);
