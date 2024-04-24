function tribonacci(n: number): number {
	const dp = new Array(n)
	dp[0] = 0
	dp[1] = 1
	dp[2] = 1

	for (let i = 0; i <= n - 3; i++) {
		dp[i + 3] = dp[i] + dp[i + 1] + dp[i + 2]
	}

	return dp[n]
}

function tribonacci2(n: number): number {
	let a = 0
	let b = 1
	let c = 1

	if (n === 0) return 0

	for (let i = 3; i <= n; i++) {
		const sum = a + b + c

		a = b
		b = c
		c = sum
	}

	return c
}

function tribonacciRecursive(n: number): number {
	const memo = new Map()
	function helper(n: number): number {
		if (memo.has(n)) {
			return memo.get(n)
		} else {
			if (n === 0) return 0
			if (n === 1) return 1
			if (n === 2) return 1

			const res = helper(n - 1) + helper(n - 2) + helper(n - 3)
			memo.set(n, res)
			return res
		}
	}

	return helper(n)
}

console.log(tribonacci(5))
console.log(tribonacci(25))
