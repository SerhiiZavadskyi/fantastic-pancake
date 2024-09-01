function construct2DArray(original: number[], m: number, n: number): number[][] {
	if (original.length !== m * n) {
		return []
	}

	const res: number[][] = []

	for (let row = 0; row < m; row++) {
		res.push(original.slice(row * n, row * n + n))
	}

	return res
}

console.log(construct2DArray([1, 2, 3, 4], 2, 2))
