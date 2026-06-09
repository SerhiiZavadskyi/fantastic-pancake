function highestPeak(isWater: number[][]): number[][] {
	const ROWS = isWater.length;
	const COLS = isWater[0].length;

	const res = Array.from({ length: ROWS }, () => Array(COLS).fill(-1));
	let queue: [number, number, number][] = [];
	const HIGHEST_PEEK_DIRECTIONS: number[] = [0, 1, 0, -1, 0];

	for (let row = 0; row < ROWS; row++) {
		for (let col = 0; col < COLS; col++) {
			if (isWater[row][col] === 1) {
				res[row][col] = 0;
				queue.push([row, col, 0]);
			}
		}
	}

	while (queue.length > 0) {
		const nextQueue: [number, number, number][] = [];
		for (const [currentRow, currentCol, currentHeight] of queue) {
			for (let i = 0; i < 4; i++) {
				const nextRow = currentRow + HIGHEST_PEEK_DIRECTIONS[i];
				const nextCol = currentCol + HIGHEST_PEEK_DIRECTIONS[i + 1];

				if (nextRow < 0 || nextRow >= ROWS || nextCol < 0 || nextCol >= COLS || res[nextRow][nextCol] !== -1) {
					continue;
				}

				res[nextRow][nextCol] = currentHeight + 1;
				queue.push([nextRow, nextCol, currentHeight + 1]);
			}
		}
		queue = nextQueue;
	}

	return res;
}

console.log(
	highestPeak([
		[1, 0],
		[0, 0],
	])
);
