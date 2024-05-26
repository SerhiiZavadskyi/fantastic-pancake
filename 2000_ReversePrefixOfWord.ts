function reversePrefix(word: string, ch: string): string {
	let prefix = ""

	for (let i = 0; i < word.length; i++) {
		prefix = word[i] + prefix

		if (word[i] === ch) {
			return prefix + word.slice(i + 1)
		}
	}

	return word
}

function reversePrefix2(word: string, ch: string): string {
	let r = word.indexOf(ch)
	let l = 0
	const chars = Array.from(word)

	while (l < r) {
		const temp = chars[l]
		chars[l] = chars[r]
		chars[r] = temp

		l++
		r--
	}

	return chars.join("")
}

function reversePrefix3(word: string, ch: string): string {
	const idx = word.indexOf(ch)
	if (idx === -1) return word

	return (
		word
			.slice(0, idx + 1)
			.split("")
			.reverse()
			.join("") + word.slice(idx + 1)
	)
}

console.log(reversePrefix3("abcdfdr", "d"))
