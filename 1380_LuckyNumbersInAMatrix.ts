function luckyNumbers(matrix: number[][]): number[] {
	const rows = matrix.length
	const cols = matrix[0].length

	const rowMin = new Set<number>()

	const res: number[] = []

	for (const r of matrix) {
		rowMin.add(Math.min(...r))
	}

	for (let c = 0; c < cols; c++) {
		let currMax = matrix[0][c]

		for (let r = 0; r < rows; r++) {
			currMax = Math.max(currMax, matrix[r][c])
		}

		if (rowMin.has(currMax)) {
			res.push(currMax)
		}
	}

	return res
}

function luckyNumbers2(matrix: number[][]): number[] {
	const rows = matrix.length
	const cols = matrix[0].length

	const rowMin = new Set<number>()
	const colMax = new Set<number>()

	for (const r of matrix) {
		rowMin.add(Math.min(...r))
	}

	for (let c = 0; c < cols; c++) {
		let currMax = matrix[0][c]

		for (let r = 0; r < rows; r++) {
			currMax = Math.max(currMax, matrix[r][c])
		}

		colMax.add(currMax)
	}

	return [...rowMin].filter((n) => colMax.has(n))
}
console.log(
	luckyNumbers([
		[1, 10, 4, 2],
		[9, 3, 8, 7],
		[15, 16, 17, 12],
	])
)
