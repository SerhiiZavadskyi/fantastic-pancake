function largestLocal(grid: number[][]): number[][] {
	const len = grid.length - 2

	const res = Array.from({ length: len }, () => Array.from({ length: len }, () => 0))

	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len; j++) {
			for (let r = i; r < i + 3; r++) {
				for (let c = j; c < j + 3; c++) {
					res[i][j] = Math.max(res[i][j], grid[r][c])
				}
			}
		}
	}

	return res
}
console.log(
	largestLocal([
		[9, 9, 8, 1],
		[5, 6, 2, 6],
		[8, 2, 6, 4],
		[6, 2, 2, 2],
	])
)
