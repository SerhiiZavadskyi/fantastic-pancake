function wordBreak(s: string, wordDict: string[]): string[] {
	const wordsSet = new Set(wordDict)
	const curr: string[] = []
	const res: string[] = []

	const backtrack = (i: number) => {
		if (i === s.length) {
			res.push(curr.join(" "))
			return
		}
		for (let j = i; j < s.length; j++) {
			const w = s.slice(i, j + 1)

			if (wordsSet.has(w)) {
				curr.push(w)
				backtrack(j + 1)
				curr.pop()
			}
		}
	}

	backtrack(0)

	return res
}

console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]))
