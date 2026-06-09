function maximumLength(s: string): number {
	const subStrings: string[] = [];

	for (let i = 0; i < s.length; i++) {
		let idx = i;

		while (idx <= s.length && s[idx] === s[i]) {
			subStrings.push(s.substring(i, idx + 1));
			idx++;
		}
	}

	const subStringsCounter = new Map<string, number>();

	for (const s of subStrings) {
		subStringsCounter.set(s, (subStringsCounter.get(s) ?? 0) + 1);
	}

	let maxLength = 0;

	for (const [str, cnt] of subStringsCounter) {
		if (cnt >= 3 && str.length > maxLength) {
			maxLength = str.length;
		}
	}

	return maxLength === 0 ? -1 : maxLength;
}

console.log(maximumLength("aaaa"));
