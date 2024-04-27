function minFallingPathSum(grid: number[][]): number {
	const len = grid.length
	let dp = grid[0]

	for (let r = 1; r < len; r++) {
		const next_dp = new Array(len).fill(Infinity)

		for (let curr = 0; curr < len; curr++) {
			for (let prev = 0; prev < len; prev++) {
				if (prev !== curr) {
					next_dp[curr] = Math.min(next_dp[curr], grid[r][curr] + dp[prev])
				}
			}
		}

		dp = next_dp
	}

	return Math.min(...dp)
}

console.log(
	minFallingPathSum([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	])
)

function minFallingPathSumRecursive(grid: number[][]): number {
	const len = grid.length
	const memo = new Map()

	function helper(r: number, c: number): number {
		if (r === len - 1) {
			return grid[r][c]
		}

		const key = `${r}-${c}`

		if (memo.has(key)) {
			return memo.get(key)
		}

		let res = Infinity

		for (let i = 0; i < len; i++) {
			if (c !== i) {
				res = Math.min(res, grid[r][r] + helper(r + 1, i))
			}
		}
		memo.set(key, res)
		return res
	}
	let res = Infinity
	for (let i = 0; i < len; i++) {
		res = Math.min(res, helper(0, i))
	}

	return res
}
console.log(
	minFallingPathSumRecursive([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	])
)
