function stoneGameII(piles: number[]): number {
	const cache = new Map()

	const dfs = (alice: boolean, i: number, M: number): number => {
		if (i === piles.length) {
			return 0
		}
		if (cache.has(`${alice}-${i}-${M}`)) {
			return cache.get(`${alice}-${i}-${M}`)
		}
		let res = alice ? 0 : Infinity,
			total = 0

		for (let X = 1; X < 2 * M + 1; X++) {
			if (i + X > piles.length) {
				break
			}

			total += piles[i + X - 1]

			if (alice) {
				res = Math.max(res, total + dfs(!alice, i + X, Math.max(M, X)))
			} else {
				res = Math.min(res, dfs(!alice, i + X, Math.max(M, X)))
			}
		}

		cache.set(`${alice}-${i}-${M}`, res)

		return res
	}

	return dfs(true, 0, 1)
}
console.log(stoneGameII([2, 7, 9, 4, 4]))
