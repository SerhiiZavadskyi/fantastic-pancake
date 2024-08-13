function combinationSum2(candidates: number[], target: number): number[][] {
	const res: number[][] = []

	candidates.sort((a, b) => a - b)

	const dfs = (i: number, curr: number[], total: number) => {
		if (total === target) {
			res.push([...curr])
			return
		}

		if (total > target || candidates.length === i) {
			return
		}

		curr.push(candidates[i])
		dfs(i + 1, curr, total + candidates[i])
		curr.pop()

		while (candidates[i] === candidates[i + 1] && i + 1 < candidates.length) {
			i++
		}

		dfs(i + 1, curr, total)
	}
	dfs(0, [], 0)

	return res
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))
