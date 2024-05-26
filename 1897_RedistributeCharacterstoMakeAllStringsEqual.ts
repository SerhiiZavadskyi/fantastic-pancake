function makeEqual(words: string[]): boolean {
	const map = new Map<string, number>();

	for (const str of words) {
		for (const char of str) {
			map.set(char, (map.get(char) || 0) + 1);
		}
	}

	for (const num of map.values()) {
		if (num % words.length !== 0) return false;
	}

	return true;
}

function makeEqual2(words: string[]): boolean {
	const map = new Map<string, number>();
	const str = words.join("");

	for (const char of str) {
		map.set(char, (map.get(char) || 0) + 1);
	}

	return [...map.values()].every((num) => num % words.length === 0);
}

console.log(makeEqual(["abc", "aacb", "cb"]));
