function regionsBySlashes(grid: string[]): number {
	const ROWS1 = grid.length
	const COLS1 = grid[0].length
	const ROWS2 = 3 * ROWS1
	const COLS2 = 3 * COLS1
	const grid2 = Array.from({ length: ROWS2 }, () => Array.from({ length: COLS2 }, () => 0))
	let res = 0
	const visited = new Set()

	for (let r = 0; r < ROWS1; r++) {
		for (let c = 0; c < COLS1; c++) {
			const r2 = 3 * r
			const c2 = 3 * c

			if (grid[r][c] === "/") {
				grid2[r2][c2 + 2] = 1
				grid2[r2 + 1][c2 + 1] = 1
				grid2[r2 + 2][c2] = 1
			} else if (grid[r][c] === "\\") {
				grid2[r2][c2] = 1
				grid2[r2 + 1][c2 + 1] = 1
				grid2[r2 + 2][c2 + 2] = 1
			}
		}
	}

	function dfs(r: number, c: number) {
		if (r < 0 || c < 0 || r === ROWS2 || c === COLS2 || grid2[r][c] !== 0 || visited.has(`${r}-${c}`)) {
			return
		}
		visited.add(`${r}-${c}`)

		const nei = [
			[r + 1, c],
			[r, c + 1],
			[r - 1, c],
			[r, c - 1],
		]

		for (const [nr, nc] of nei) {
			dfs(nr, nc)
		}
	}

	for (let r = 0; r < ROWS2; r++) {
		for (let c = 0; c < COLS2; c++) {
			if (grid2[r][c] === 0 && !visited.has(`${r}-${c}`)) {
				dfs(r, c)
				res++
			}
		}
	}

	return res
}

console.log(regionsBySlashes([" /", "/ "]))
