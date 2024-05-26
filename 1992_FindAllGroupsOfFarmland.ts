function findFarmland(land: number[][]): number[][] {
	const rows = land.length
	const cols = land[0].length
	const farmland: number[][] = []

	function dfs(r: number, c: number, bottomRight: number[]) {
		if (r < 0 || r >= rows || c < 0 || c >= cols || land[r][c] === 0) {
			return
		}

		land[r][c] = 0

		bottomRight[0] = Math.max(bottomRight[0], r)
		bottomRight[1] = Math.max(bottomRight[1], c)

		dfs(r + 1, c, bottomRight)
		dfs(r, c + 1, bottomRight)
	}

	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			if (land[r][c] === 1) {
				const bottomRight = [r, c]

				dfs(r, c, bottomRight)

				farmland.push([r, c, bottomRight[0], bottomRight[1]])
			}
		}
	}

	return farmland
}

console.log(
	findFarmland([
		[1, 0, 0],
		[0, 1, 1],
		[0, 1, 1],
	])
)
