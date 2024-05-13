function matrixScore(grid: number[][]): number {
	let score = 0
	const rows = grid.length
	const cols = grid[0].length

	// Flip rows
	for (let r = 0; r < rows; r++) {
		if (grid[r][0] === 0) {
			for (let c = 0; c < cols; c++) {
				grid[r][c] = grid[r][c] === 1 ? 0 : 1
			}
		}
	}

	// flip cols

	for (let c = 0; c < cols; c++) {
		let oneCount = 0

		for (let r = 0; r < rows; r++) {
			oneCount += grid[r][c]
		}

		if (oneCount < rows - oneCount) {
			for (let r = 0; r < rows; r++) {
				grid[r][c] = grid[r][c] === 1 ? 0 : 1
			}
		}
	}

	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			// if (grid[r][c] === 1) {
			// 	score += 2 ** (cols - c - 1)
			// }

			score += grid[r][c] << (cols - c - 1)
		}
	}

	return score
}
console.log(
	matrixScore([
		[0, 0, 1, 1],
		[1, 0, 1, 0],
		[1, 1, 0, 0],
	])
)
