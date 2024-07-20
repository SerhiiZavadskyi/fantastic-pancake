function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
	const rows = rowSum.length
	const cols = colSum.length

	const res: number[][] = Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0))

	for (let i = 0; i < rows; i++) {
		res[i][0] = rowSum[i]
	}

	for (let j = 0; j < cols; j++) {
		let currColSum = 0

		for (let i = 0; i < rows; i++) {
			currColSum += res[i][j]
		}

		let i = 0

		while (currColSum > colSum[j]) {
			const diff = currColSum - colSum[j]
			const maxShift = Math.min(diff, res[i][j])

			res[i][j] -= maxShift
			res[i][j + 1] += maxShift
			currColSum -= maxShift
			i++
		}
	}

	return res
}

function restoreMatrix2(rowSum: number[], colSum: number[]): number[][] {
	const rows = rowSum.length
	const cols = colSum.length

	const res: number[][] = Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0))

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			const min = Math.min(rowSum[i], colSum[j])
			res[i][j] = min
			rowSum[i] -= min
			colSum[j] -= min
		}
	}

	return res
}

console.log(restoreMatrix2([5, 7, 10], [8, 6, 8]))
