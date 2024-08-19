function minSteps(n: number): number {
	const dp = new Array(n + 1).fill(1000)
	dp[1] = 0

	for (let i = 2; i < n + 1; i++) {
		for (let j = 1; j < Math.floor(i / 2) + 1; j++) {
			if (i % j === 0) {
				dp[i] = Math.min(dp[j] + Math.floor(i / j), dp[i])
			}
		}
	}

	return dp[n]
}

console.log(minSteps(10))

function minSteps2(n: number): number {
	const cache = new Map()
	const helper = (count: number, paste: number): number => {
		if (count === n) {
			return 0
		}
		if (count > n) {
			return 1000
		}

		if (cache.has(`${count}-${paste}`)) {
			return cache.get(`${count}-${paste}`)
		}
		const res1 = 1 + helper(count + paste, paste)
		const res2 = 2 + helper(count + count, count)
		const res = Math.min(res1, res2)
		cache.set(`${count}-${paste}`, res)

		return res
	}
	if (n === 1) {
		return 0
	}
	return 1 + helper(1, 1)
}
