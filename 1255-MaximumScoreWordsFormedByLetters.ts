function maxScoreWords(words: string[], letters: string[], score: number[]): number {
	const letterCount = new Map<string, number>()

	for (const l of letters) {
		letterCount.set(l, (letterCount.get(l) ?? 0) + 1)
	}

	const getScore = (w: string): number => {
		let res = 0

		for (const c of w) {
			res += score[c.charCodeAt(0) - "a".charCodeAt(0)]
		}

		return res
	}

	const canFormWord = (word: string): boolean => {
		const wordCount = new Map<string, number>()

		for (const w of word) {
			wordCount.set(w, (wordCount.get(w) ?? 0) + 1)
		}

		for (const [c, cnt] of wordCount) {
			if (cnt > (letterCount.get(c) ?? 0)) {
				return false
			}
		}

		return true
	}

	const backtrack = (i: number): number => {
		if (i === words.length) {
			return 0
		}

		let result = backtrack(i + 1)

		if (canFormWord(words[i])) {
			// Decrease the count for the current word's letters
			for (const c of words[i]) {
				letterCount.set(c, (letterCount.get(c) ?? 0) - 1)
			}

			// Recursively call backtrack and add the current word's score
			result = Math.max(result, getScore(words[i]) + backtrack(i + 1))

			// Restore the count for the current word's letters
			for (const c of words[i]) {
				letterCount.set(c, (letterCount.get(c) ?? 0) + 1)
			}
		}

		return result
	}

	return backtrack(0)
}

function maxScoreWords2(words: string[], letters: string[], score: number[]): number {
	const canFormWord = (word: string, letter_cnt: Record<string, number>): boolean => {
		const wordCount: Record<string, number> = {}

		for (const w of word) {
			wordCount[w] = (wordCount[w] || 0) + 1
		}

		for (const c in wordCount) {
			if (wordCount[c] > (letter_cnt[c] || 0)) {
				return false
			}
		}

		return true
	}

	const letterCount: Record<string, number> = {}

	for (const l of letters) {
		letterCount[l] = (letterCount[l] || 0) + 1
	}

	const getScore = (w: string): number => {
		let res = 0

		for (const c of w) {
			res += score[c.charCodeAt(0) - "a".charCodeAt(0)]
		}

		return res
	}

	const backtrack = (i: number, currentLetterCount: Record<string, number>): number => {
		if (i === words.length) {
			return 0
		}

		let result = backtrack(i + 1, currentLetterCount)

		if (canFormWord(words[i], currentLetterCount)) {
			// Decrease the count for the current word's letters
			for (const c of words[i]) {
				currentLetterCount[c] -= 1
			}

			// Recursively call backtrack and add the current word's score
			result = Math.max(result, getScore(words[i]) + backtrack(i + 1, currentLetterCount))

			// Restore the count for the current word's letters
			for (const c of words[i]) {
				currentLetterCount[c] += 1
			}
		}

		return result
	}

	return backtrack(0, { ...letterCount })
}

console.log(
	maxScoreWords2(
		["dog", "cat", "dad", "good"],
		["a", "a", "c", "d", "d", "d", "g", "o", "o"],
		[1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	)
)

console.log(
	maxScoreWords(
		["dog", "cat", "dad", "good"],
		["a", "a", "c", "d", "d", "d", "g", "o", "o"],
		[1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	)
)
