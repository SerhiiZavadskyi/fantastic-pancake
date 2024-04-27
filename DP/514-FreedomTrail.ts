function findRotateSteps(ring: string, key: string): number {
	let dp = new Array(ring.length).fill(0)

	for (let k = key.length - 1; k >= 0; k--) {
		const next_dp = new Array(ring.length).fill(Infinity)

		for (let r = 0; r < ring.length; r++) {
			for (let i = 0; i < ring.length; i++) {
				const c = ring[i]

				if (c === key[k]) {
					const min_dist = Math.min(Math.abs(r - i), ring.length - Math.abs(r - i))
					next_dp[r] = Math.min(next_dp[r], min_dist + 1 + dp[i])
				}
			}
		}

		dp = next_dp
	}

	return dp[0]
}

console.log(findRotateSteps("godding", "gd"))
