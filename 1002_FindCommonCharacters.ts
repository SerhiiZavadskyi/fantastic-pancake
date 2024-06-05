function commonChars(words: string[]): string[] {
	const counter = (w: string): Map<string, number> => {
		const count = new Map()

		for (const c of w) {
			count.set(c, (count.get(c) ?? 0) + 1)
		}

		return count
	}

	const cnt = counter(words[0])

	for (const w of words) {
		const currCount = counter(w)

		for (const [char, c] of cnt) {
			cnt.set(char, Math.min(cnt.get(char) ?? 0, currCount.get(char) ?? 0))
		}
	}

	const res: string[] = []

	for (const [c] of cnt) {
		for (let i = 0; i < cnt.get(c)!; i++) {
			res.push(c)
		}
	}

	return res
}

console.log(commonChars(["bella", "label", "roller"]))
