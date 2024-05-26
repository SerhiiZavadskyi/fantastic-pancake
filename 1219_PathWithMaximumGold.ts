function getMaximumGold(grid: number[][]): number {
	let max = 0
	const rows = grid.length
	const cols = grid[0].length

	function dfs(r: number, c: number): number {
		const key = `${r}-${c}`
		if (Math.min(r, c) < 0 || r === rows || c === cols || grid[r][c] === 0) {
			return 0
		}
		const curr = grid[r][c]
		let currMax = curr
		const nei = [
			[r + 1, c],
			[r - 1, c],
			[r, c + 1],
			[r, c - 1],
		]

		grid[r][c] = 0

		for (const [r2, c2] of nei) {
			currMax = Math.max(currMax, curr + dfs(r2, c2))
		}

		grid[r][c] = curr

		return currMax
	}

	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			max = Math.max(max, dfs(r, c))
		}
	}

	return max
}
console.log(
	getMaximumGold([
		[0, 6, 0],
		[5, 8, 7],
		[0, 9, 0],
	])
)
