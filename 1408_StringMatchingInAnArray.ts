function stringMatching(words: string[]): string[] {
	const res: Set<string> = new Set();

	for (let i = 0; i < words.length; i++) {
		for (let j = 0; j < words.length; j++) {
			if (i === j) {
				continue;
			}
			if (words[i].indexOf(words[j]) !== -1) {
				res.add(words[j]);
			}
		}
	}

	return [...res];
}

console.log(stringMatching(["mass", "as", "hero", "superhero"]));
