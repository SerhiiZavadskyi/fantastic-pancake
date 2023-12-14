// You are given a 0-indexed m x n binary matrix grid.

// A 0-indexed m x n difference matrix diff is created with the following procedure:

// Let the number of ones in the ith row be onesRowi.
// Let the number of ones in the jth column be onesColj.
// Let the number of zeros in the ith row be zerosRowi.
// Let the number of zeros in the jth column be zerosColj.
// diff[i][j] = onesRowi + onesColj - zerosRowi - zerosColj
// Return the difference matrix diff.

function onesMinusZeros(grid: number[][]): number[][] {
	const ROWS = grid.length;
	const COLS = grid[0].length;
	const onesRow = Array.from({ length: ROWS }, () => 0);
	const onesCol = Array.from({ length: COLS }, () => 0);
	const zerosRow = Array.from({ length: ROWS }, () => 0);
	const zerosCol = Array.from({ length: COLS }, () => 0);
	const result = Array.from({ length: ROWS }, () =>
		Array.from({ length: COLS }, () => 0)
	);

	for (let i = 0; i < ROWS; i++) {
		for (let j = 0; j < COLS; j++) {
			if (grid[i][j] === 1) {
				onesRow[i]++;
				onesCol[j]++;
			}

			if (grid[i][j] === 0) {
				zerosRow[i]++;
				zerosCol[j]++;
			}
		}
	}

	for (let i = 0; i < ROWS; i++) {
		for (let j = 0; j < COLS; j++) {
			result[i][j] = onesRow[i] + onesCol[j] - zerosRow[i] - zerosCol[j];
		}
	}

	return result;
}

console.log(
	onesMinusZeros([
		[0, 1, 1],
		[1, 0, 1],
		[0, 0, 1],
	])
);
