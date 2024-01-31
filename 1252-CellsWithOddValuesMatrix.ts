function oddCells(row: number, col: number, indices: number[][]): number {
	let res = 0;
	const matrix = Array.from({ length: row }, () => Array.from({ length: col }, () => 0));

	for (const [r, c] of indices) {
		for (let i = 0; i < row; i++) {
			matrix[i][c] += 1;
		}

		for (let i = 0; i < col; i++) {
			matrix[r][i] += 1;
		}
	}

	for (const row of matrix) {
		for (const r of row) {
			if (r % 2) res++;
		}
	}

	return res;
}

console.log(
	oddCells(2, 3, [
		[0, 1],
		[1, 1],
	])
);
