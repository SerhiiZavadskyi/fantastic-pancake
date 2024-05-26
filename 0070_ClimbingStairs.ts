function climbStairs(n: number): number {
	function fibonacci(n: number): number {
		const cache: Record<number, number> = {};
		function count(n: number): number {
			if (n < 2) return n;

			if (n in cache) {
				return cache[n];
			} else {
				const res = count(n - 1) + count(n - 2);
				cache[n] = res;
				return res;
			}
		}

		return count(n);
	}

	return fibonacci(n + 1);
}

function climbStairsDP(n: number): number {
	const dp = new Array(n);
	dp[0] = 1;
	dp[1] = 1;

	for (let i = 2; i < n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}

	return dp[n - 1];
}

function fibonacciDP(n: number): number {
	const dp = new Array(n);
	dp[0] = 1;
	dp[1] = 1;

	for (let i = 2; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}

	return dp[n];
}

function climbStairs2(n: number): number {
	let prev = 0;
	let current = 1;

	for (let i = 2; i <= n; i++) {
		const next = prev + current;
		prev = current;
		current = next;
	}

	return current;
}
console.log(climbStairs2(5));
console.log(fibonacciDP(5));
