function findMissingAndRepeatedValues(grid: number[][]): number[] {
	const arr: number[] = new Array(grid.length * grid.length + 1).fill(0);

	for (let r = 0; r < grid.length; r++) {
		for (let c = 0; c < grid[0].length; c++) {
			arr[grid[r][c]]++;
		}
	}

	const res: number[] = [];

	for (let i = 1; i <= arr.length; i++) {
		//repeating val
		if (arr[i] > 1) {
			res[0] = i;
		}

		//missing value
		if (arr[i] === 0) {
			res[1] = i;
		}
	}

	return res;
}

console.log(
	findMissingAndRepeatedValues([
		[9, 1, 7],
		[8, 9, 2],
		[3, 4, 6],
	])
);
