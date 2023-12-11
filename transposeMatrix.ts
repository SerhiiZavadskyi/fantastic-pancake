function transpose(matrix: number[][]): number[][] {
	const ROWS = matrix.length;
	const COLS = matrix[0].length;
	const res = Array.from(
		{ length: COLS },
		() => Array.from({ length: ROWS }) as number[]
	);

	for (let r = 0; r < ROWS; r++) {
		for (let c = 0; c < COLS; c++) {
			res[c][r] = matrix[r][c];
		}
	}

	return res;
}

function transpose1(matrix: number[][]): number[][] {
	const ROWS = matrix.length;
	const COLS = matrix[0].length;

	return Array.from({ length: COLS }, (_, r) =>
		Array.from({ length: ROWS }, (_, c) => matrix[c][r])
	);
}

const matrix1 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
const matrix2 = [
	[1, 2, 3],
	[4, 5, 6],
];

const matrix3 = [
	[1, 2],
	[3, 4],
	[5, 6],
];
console.log(transpose1(matrix1));
