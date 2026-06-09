function canConstruct2(ransomNote: string, magazine: string): boolean {
	if (ransomNote.length > magazine.length) return false;

	const map = new Map();

	for (const char of ransomNote) {
		map.set(char, (map.get(char) ?? 0) + 1);
	}

	for (const char of magazine) {
		if (map.has(char) && map.get(char) > 0) {
			map.set(char, map.get(char) - 1);
		}
	}

	for (const [key, cnt] of map) {
		if (cnt !== 0) return false;
	}

	return true;
}

function canConstruct(ransomNote: string, magazine: string): boolean {
	for (const char of ransomNote) {
		const idx = magazine.indexOf(char);

		if (idx === -1) {
			return false;
		}

		magazine = magazine.slice(0, idx) + magazine.slice(idx + 1);
	}

	console.log(magazine);

	return true;
}

console.log(canConstruct("bg", "efjbgg"));
