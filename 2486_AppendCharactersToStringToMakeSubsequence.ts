function appendCharacters(s: string, t: string): number {
	let sPointer = 0,
		tPointer = 0

	while (sPointer < s.length && tPointer < t.length) {
		if (s[sPointer] === t[tPointer]) {
			sPointer++
			tPointer++
		} else {
			sPointer++
		}
	}

	return t.length - tPointer
}

console.log(appendCharacters("coaching", "coding"))
