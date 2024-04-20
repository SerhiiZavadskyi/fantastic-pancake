function numIslands(grid: string[][]): number {
	let res = 0
	const rows = grid.length
	const cols = grid[0].length

	function dfs(r: number, c: number) {
		if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === "0") {
			return
		}

		grid[r][c] = "0"

		dfs(r, c + 1)
		dfs(r, c - 1)
		dfs(r + 1, c)
		dfs(r - 1, c)
	}

	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			if (grid[r][c] === "1") {
				dfs(r, c)
				res++
			}
		}
	}
	return res
}
console.log(
	numIslands([
		["1", "1", "0", "0", "0"],
		["1", "1", "0", "0", "0"],
		["0", "0", "1", "0", "0"],
		["0", "0", "0", "1", "1"],
	])
)
