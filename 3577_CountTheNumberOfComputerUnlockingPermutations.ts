function countPermutations(complexity: number[]): number {
	let res = 1;
	let n = complexity.length;
	const mod = 10 ** 9 + 7;

	for (let i = 1; i < n; i++) {
		if (complexity[i]! <= complexity[0]!) {
			return 0;
		}
	}

	for (let i = 2; i < n; i++) {
		res = (res * i) % mod;
	}

	return res;
}

console.log(countPermutations([38, 223, 100, 123, 406, 234, 256, 93, 222, 259, 233, 69, 139, 245, 45, 98, 214]));
