function minDays(grid: number[][]): number {
	const m = grid.length,
		n = grid[0].length
	if (!isConnected()) return 0
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] === 1) {
				grid[i][j] = 0
				if (!isConnected()) return 1
				grid[i][j] = 1
			}
		}
	}
	return 2

	function isConnected() {
		let queue: [number, number][] = [],
			seen = new Set(),
			ans = 0
		for (let i = 0; i < m; i++) {
			for (let j = 0; j < n; j++) {
				if (grid[i][j] === 1 && !seen.has(i + "," + j)) {
					ans++
					if (ans > 1) break
					queue = [[i, j]]
					while (queue.length > 0) {
						const [r, c] = queue.shift()!
						for (const [nr, nc] of adj(r, c)) {
							if (valid(nr, nc) && !seen.has(nr + "," + nc)) {
								queue.push([nr, nc])
								seen.add(nr + "," + nc)
							}
						}
					}
				}
			}
			if (ans > 1) break
		}
		return ans === 1
	}

	function adj(i: number, j: number): [number, number][] {
		return [
			[i - 1, j],
			[i, j - 1],
			[i + 1, j],
			[i, j + 1],
		]
	}
	function valid(i: number, j: number): boolean {
		return 0 <= i && i < m && 0 <= j && j < n && grid[i][j] === 1
	}
}
