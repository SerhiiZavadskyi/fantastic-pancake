function numSubmatrixSumTarget(matrix: number[][], target: number): number {
	const ROWS = matrix.length;
	const COLS = matrix[0].length;

	const subSum = new Array(ROWS).fill(0).map(() => new Array(COLS).fill(0));

	for (let r = 0; r < ROWS; r++) {
		for (let c = 0; c < COLS; c++) {
			const top = r > 0 ? subSum[r - 1][c] : 0;
			const left = c > 0 ? subSum[r][c - 1] : 0;
			const topLeft = Math.min(r, c) > 0 ? subSum[r - 1][c - 1] : 0;

			subSum[r][c] = matrix[r][c] + top + left - topLeft;
		}
	}

	let res = 0;

	for (let r1 = 0; r1 < ROWS; r1++) {
		for (let r2 = r1; r2 < ROWS; r2++) {
			const count = new Map();
			count.set(0, 1);
			for (let c = 0; c < COLS; c++) {
				const currSum =
					subSum[r2][c] - (r1 > 0 ? subSum[r1 - 1][c] : 0);

				const diff = currSum - target;
				res += count.get(diff) || 0;
				count.set(currSum, (count.get(currSum) ?? 0) + 1);
			}
		}
	}
	return res;
}
console.log(
	numSubmatrixSumTarget(
		[
			[0, 1, 0],
			[1, 1, 1],
			[0, 1, 0],
		],
		0
	)
);
