function maxWidthOfVerticalArea1(points: number[][]): number {
	const sorted = [...points].sort((x1, x2) => x1[0] - x2[0]);
	let res: number = 0;

	for (let i = 0; i < sorted.length - 1; i++) {
		res = Math.max(Math.abs(sorted[i][0] - sorted[i + 1][0]), res);
	}

	return res;
}

function maxWidthOfVerticalArea(points: number[][]): number {
	const map: Record<number, number> = {};

	for (const p of points) {
		map[p[0]] = p[0];
	}

	const x = Object.values(map);
	let result = 0;

	for (let i = 0; i < x.length - 1; i++) {
		result = Math.max(x[i + 1] - x[i], result);
	}

	return result;
}

console.log(
	maxWidthOfVerticalArea([
		[3, 1],
		[9, 0],
		[1, 0],
		[1, 4],
		[5, 3],
		[8, 8],
	])
);
