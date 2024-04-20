function islandPerimeter(grid: number[][]): number {
	let res = 0

	for (let r = 0; r < grid.length; r++) {
		for (let c = 0; c < grid[0].length; c++) {
			if (grid[r][c] === 1) {
				res += 4

				if (r > 0 && grid[r - 1][c] === 1) {
					res -= 2
				}

				if (c > 0 && grid[r][c - 1] === 1) {
					res -= 2
				}
			}
		}
	}

	return res
}

function islandPerimeter2(grid: number[][]): number {
	let res = 0
	const rows = grid.length
	const cols = grid[0].length

	function dfs(r: number, c: number): number {
		if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0) {
			return 1
		}

		if (grid[r][c] == -1) {
			return 0
		}

		grid[r][c] = -1 // mark as visited

		return dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1)
	}

	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			if (grid[r][c] === 1) {
				res += dfs(r, c)
			}
		}
	}

	return res
}

console.log(
	islandPerimeter2([
		[0, 1, 0, 0],
		[1, 1, 1, 0],
		[0, 1, 0, 0],
		[1, 1, 0, 0],
	])
)
