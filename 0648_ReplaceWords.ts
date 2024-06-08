function replaceWords(dictionary: string[], sentence: string): string {
	const words = sentence.split(" ")

	for (let i = 0; i < words.length; i++) {
		for (const root of dictionary) {
			if (words[i].startsWith(root)) {
				words[i] = root
			}
		}
	}

	return words.join(" ")
}
console.log(replaceWords(["a", "b", "c"], "aadsfasf absbs bbab cadsfafs"))
