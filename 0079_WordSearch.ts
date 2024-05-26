function exist(board: string[][], word: string): boolean {
	let rows = board.length,
		cols = board[0].length
	const path = new Set()

	function dfs(r: number, c: number, i: number): boolean {
		if (i === word.length) {
			return true
		}

		if (r < 0 || c < 0 || r >= rows || c >= cols || word[i] !== board[r][c] || path.has(`${r}-${c}`)) {
			return false
		}

		path.add(`${r}-${c}`)

		const res = dfs(r + 1, c, i + 1) || dfs(r - 1, c, i + 1) || dfs(r, c + 1, i + 1) || dfs(r, c - 1, i + 1)
		path.delete(`${r}-${c}`)
		return res
	}

	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			if (dfs(r, c, 0)) return true
		}
	}

	return false
}

console.log(
	exist(
		[
			["A", "B", "C", "E"],
			["S", "F", "C", "S"],
			["A", "D", "E", "E"],
		],
		"ABCCED"
	)
)
console.log(
	exist(
		[
			["A", "B", "C", "E"],
			["S", "F", "C", "S"],
			["A", "D", "E", "E"],
		],
		"ABCB"
	)
)
