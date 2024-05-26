import { MaxHeap } from "./helpers/MaxHeap"

function maximumSafenessFactor(grid: number[][]): number {
	const len = grid.length
	const dir = [1, 0, -1, 0, 1]
	const queue: number[][] = []

	for (let r = 0; r < len; r++) {
		for (let c = 0; c < len; c++) {
			if (grid[r][c] === 1) {
				queue.push([r, c])
			}
		}
	}

	while (queue.length > 0) {
		const [r, c] = queue.shift()!

		for (let i = 0; i < 4; i++) {
			const x = r + dir[i]
			const y = c + dir[i + 1]
			if (Math.min(x, y) >= 0 && Math.max(x, y) < len && grid[x][y] === 0) {
				grid[x][y] = grid[r][c] + 1
				queue.push([x, y])
			}
		}
	}

	const maxHeap = new MaxHeap()
	maxHeap.push([grid[0][0], 0, 0])

	while (maxHeap.size() > 0) {
		const [dist, r, c] = maxHeap.pop()!

		if (r === len - 1 && c === len - 1) {
			return dist - 1
		}

		for (let i = 0; i < 4; i++) {
			const x = r + dir[i]
			const y = c + dir[i + 1]
			if (Math.min(x, y) >= 0 && Math.max(x, y) < len && grid[x][y] > 0) {
				maxHeap.push([Math.min(dist, grid[x][y]), x, y])
				grid[x][y] *= -1
			}
		}
	}

	return 0
}

console.log(
	maximumSafenessFactor([
		[0, 0, 1],
		[0, 0, 0],
		[0, 0, 0],
	])
)
