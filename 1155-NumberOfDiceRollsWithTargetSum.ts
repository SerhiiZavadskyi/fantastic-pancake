//memoization
function numRollsToTarget2(n: number, k: number, target: number): number {
	const MOD = 10 ** 9 + 7;
	const cache = new Map<string, number>();

	function count(n: number, target: number): number {
		if (n === 0) {
			return target === 0 ? 1 : 0;
		}
		if (cache.has(`${n},${target}`)) {
			return cache.get(`${n},${target}`) || 0;
		}
		let res = 0;

		for (let i = 1; i <= k; i++) {
			res = (res + count(n - 1, target - i)) % MOD;
		}

		cache.set(`${n},${target}`, res);
		return res;
	}

	return count(n, target);
}

function numRollsToTarget(n: number, k: number, target: number): number {
	const MOD = 10 ** 9 + 7;
	let dp = new Array(target + 1).fill(0);
	dp[0] = 1;

	for (let i = 0; i < n; i++) {
		const nextDp = new Array(target + 1).fill(0);

		for (let v = 1; v <= k; v++) {
			for (let t = v; t <= target; t++) {
				nextDp[t] = (nextDp[t] + dp[t - v]) % MOD;
			}
		}

		dp = nextDp;
	}

	return dp[target];
}

console.log(numRollsToTarget(2, 6, 6));
