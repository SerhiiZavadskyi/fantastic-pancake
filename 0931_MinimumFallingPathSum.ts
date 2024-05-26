function minFallingPathSumRecursive(matrix: number[][]): number {
	const length = matrix.length;
	const cache = new Map();

	function dfs(row: number, col: number): number {
		if (row === length) return 0;
		if (col < 0 || col === length) return Infinity;

		const key = `${row}-${col}`;

		if (cache.has(key)) return cache.get(key);

		const result =
			matrix[row][col] +
			Math.min(
				dfs(row + 1, col - 1),
				dfs(row + 1, col),
				dfs(row + 1, col + 1)
			);
		cache.set(key, result);

		return result;
	}

	let res = Number.MAX_SAFE_INTEGER;
	for (let col = 0; col < length; col++) {
		res = Math.min(dfs(0, col), res);
	}

	return res;
}

function minFallingPathSum(matrix: number[][]): number {
	for (let row = 1; row < matrix.length; row++) {
		for (let col = 0; col < matrix.length; col++) {
			const mid = matrix[row - 1][col];
			const left = matrix[row - 1][col - 1] || Number.MAX_SAFE_INTEGER;
			const right = matrix[row - 1][col + 1] || Number.MAX_SAFE_INTEGER;

			matrix[row][col] += Math.min(mid, left, right);
		}
	}

	return Math.min(...matrix[matrix.length - 1]);
}

console.log(
	minFallingPathSum([
		[2, 1, 3],
		[6, 5, 4],
		[7, 8, 9],
	])
);
