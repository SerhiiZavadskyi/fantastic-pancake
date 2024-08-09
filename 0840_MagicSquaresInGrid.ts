function numMagicSquaresInside(grid: number[][]): number {
	const ROWS = grid.length
	const COLS = grid[0].length
	let magicSquares = 0

	function sum(nums: number[]): number {
		return nums.reduce((acc, curr) => acc + curr, 0)
	}

	function magic(r: number, c: number): number {
		const values = new Set()

		for (let i = r; i < r + 3; i++) {
			for (let j = c; j < c + 3; j++) {
				if (values.has(grid[i][j]) || !(1 <= grid[i][j] && grid[i][j] <= 9)) {
					return 0
				}
				values.add(grid[i][j])
			}
		}

		for (let i = r; i < r + 3; i++) {
			if (sum(grid[i].slice(c, c + 3)) !== 15) {
				return 0
			}
		}

		for (let i = c; i < c + 3; i++) {
			if (grid[r][i] + grid[r + 1][i] + grid[r + 2][i] !== 15) {
				return 0
			}
		}

		if (
			grid[r][c] + grid[r + 1][c + 1] + grid[r + 2][c + 2] !== 15 ||
			grid[r][c + 2] + grid[r + 1][c + 1] + grid[r + 2][c] !== 15
		) {
			return 0
		}

		return 1
	}

	for (let r = 0; r < ROWS - 2; r++) {
		for (let c = 0; c < COLS - 2; c++) {
			magicSquares += magic(r, c)
		}
	}

	return magicSquares
}
console.log(
	numMagicSquaresInside([
		[4, 3, 8, 4],
		[9, 5, 1, 9],
		[2, 7, 6, 2],
	])
)
