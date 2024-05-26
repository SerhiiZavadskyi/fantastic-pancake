function kInversePairs(n: number, k: number): number {
	const MOD = 10 ** 9 + 7;

	let prev = Array.from({ length: k + 1 }, () => 0);
	prev[0] = 1;

	for (let i = 1; i <= n; i++) {
		const curr = Array.from({ length: k + 1 }, () => 0);
		for (let j = 0; j <= k; j++) {
			for (let pairs = 0; pairs < i; pairs++) {
				if (j - pairs >= 0) {
					curr[j] = (curr[j] + prev[j - pairs]) % MOD;
				}
			}
		}

		prev = curr;
	}
	console.log(prev);

	return prev[k];
}

console.log(kInversePairs(10, 11));
