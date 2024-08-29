function countSubIslands(grid1: number[][], grid2: number[][]): number {
	let reset: boolean
	let ans: number = 0
	grid2.forEach((row, r) => {
		row.forEach((col, c) => {
			if (col == 1) {
				ans += dfs(grid1, grid2, r, c)
			}
		})
	})
	return ans
}

function dfs(B: number[][], A: number[][], i: number, j: number): number {
	let m: number = A.length,
		n = A[0].length,
		res = 1
	if (i < 0 || i == m || j < 0 || j == n || A[i][j] == 0) return 1
	A[i][j] = 0
	res &= dfs(B, A, i - 1, j)
	res &= dfs(B, A, i + 1, j)
	res &= dfs(B, A, i, j - 1)
	res &= dfs(B, A, i, j + 1)
	return res & B[i][j]
}
