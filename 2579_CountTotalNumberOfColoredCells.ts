function coloredCells(n: number): number {
	return 1 + 2 * (n * (n - 1));
	// let res = 1;

	// for (let i = 0; i < n; i++) {
	// 	res += i * 4;
	// }

	// return res;
}
console.log(coloredCells(3));

/**
 * n = 1, 1
 * n = 2, 1 + 4 = 5
 * n = 3, 1 + 4 + 4*2 = 13
 * n = 4, 4*1 + 4*2 + 4*3 = 25
 * S(n) = 1 + 4(1 + 2 + 3 + ... + n) = 1 + 4* (n(n+1)/2)
 */
