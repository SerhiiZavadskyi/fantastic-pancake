function maximalRectangle(matrix: string[][]): number {
	const cols = matrix[0].length
	const heights = new Array(cols + 1).fill(0)

	let res = 0

	for (const row of matrix) {
		for (let i = 0; i < cols; i++) {
			heights[i] = row[i] === "1" ? heights[i] + 1 : 0
		}

		const stack: number[] = []

		for (let i = 0; i < heights.length; i++) {
			while (stack.length && heights[i] < heights[stack.at(-1)!]) {
				const h = heights[stack.pop()!]
				const w = !stack.length ? i : i - stack.at(-1)! - 1

				res = Math.max(res, h * w)
			}
			stack.push(i)
		}
	}

	return res
}

console.log(
	maximalRectangle([
		["1", "0", "1", "0", "0"],
		["1", "0", "1", "1", "1"],
		["1", "1", "1", "1", "1"],
		["1", "0", "0", "1", "0"],
	])
)
