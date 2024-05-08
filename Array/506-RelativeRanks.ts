function findRelativeRanks1(score: number[]): string[] {
	const positions = new Map<number, number>()

	for (let i = 0; i < score.length; i++) {
		positions.set(score[i], i)
	}

	score.sort((a, b) => b - a)
	const res = new Array(score.length)
	const medals = ["Gold Medal", "Silver Medal", "Bronze Medal"]

	for (let i = 0; i < score.length; i++) {
		const pos = positions.get(score[i])
		if (pos !== undefined) {
			res[pos] = medals[i] || (i + 1).toString()
		}
	}

	return res
}

function findRelativeRanks2(score: number[]): string[] {
	const sorted = [...score].sort((a, b) => b - a) //i+1 => place
	const positions = new Map<number, number>()
	const medals = ["Gold Medal", "Silver Medal", "Bronze Medal"]

	for (let i = 0; i < sorted.length; i++) {
		positions.set(sorted[i], i + 1)
	}

	return score.map((s) => medals[positions.get(s)! - 1] ?? positions.get(s)?.toString())
}

console.log(findRelativeRanks2([10, 3, 8, 9, 4]))
