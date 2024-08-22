function strangePrinter(s: string): number {
	if (!s) return 0

	const filteredChars: string[] = []
	for (const c of s) {
		if (filteredChars.length === 0 || c !== filteredChars[filteredChars.length - 1]) {
			filteredChars.push(c)
		}
	}

	const m = filteredChars.length
	const dp: number[][] = Array.from({ length: m }, () => Array(m).fill(Infinity))

	for (let i = 0; i < m; ++i) {
		dp[i][i] = 1
	}

	const lastSeen: Map<string, number> = new Map()
	const nextOccurrence: number[] = Array(m).fill(-1)

	for (let i = m - 1; i >= 0; --i) {
		const c = filteredChars[i]
		nextOccurrence[i] = lastSeen.get(c) ?? -1
		lastSeen.set(c, i)
	}

	for (let length = 2; length <= m; length++) {
		for (let start = 0; start <= m - length; start++) {
			const end = start + length - 1

			dp[start][end] = dp[start + 1][end] + 1

			let nextPos = nextOccurrence[start]
			while (nextPos !== -1 && nextPos <= end) {
				dp[start][end] = Math.min(
					dp[start][end],
					dp[start][nextPos - 1] + (nextPos + 1 <= end ? dp[nextPos + 1][end] : 0)
				)
				nextPos = nextOccurrence[nextPos]
			}
		}
	}

	return dp[0][m - 1]
}

console.log(strangePrinter("aaabbb"))
